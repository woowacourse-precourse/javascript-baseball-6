import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async setNumber(){
    const COMPUTER = [];
    while (COMPUTER.length < 3){
      const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!COMPUTER.includes(NUMBER)){
        COMPUTER.push(NUMBER);
      }
    }
    return COMPUTER;
  }

  async getPlayerNumber(){
    const PLAYER = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
    const PLAYER_ARR = Array.from(PLAYER).map(Number);
    if (isNaN(PLAYER) || PLAYER.length !== 3 || PLAYER_ARR.includes(0)){
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
    return PLAYER_ARR
  }

  async continueGame(){
    const CONTINUE = await MissionUtils.Console.readLineAsync("3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");
    if (CONTINUE != 1 && CONTINUE != 2){
      throw new Error("[ERROR] 잘못된 숫자를 입력했습니다.");
    }
    return CONTINUE
  }

  async compare(computer, player){
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++){
      if(computer[i] == player[i]){
        strike++;
      }
      else{
        if(computer.includes(player[i])){
          ball++;
        }
      }
    }
    
    if(ball !== 0 && strike !== 0){
      MissionUtils.Console.print('${ball}볼 ${strike}스트라이크');
    }
    else if(ball !== 0 && strike == 0){
      MissionUtils.Console.print('${ball}볼');
    }
    else if(ball == 0 && strike !== 0){
      MissionUtils.Console.print('${strike}스트라이크');
    }
    else{
      MissionUtils.Console.print('낫싱');
    }

    if(strike == 3){
      return false;
    }
    else{
      return true;
    }
  }

  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    let loop_first = true;
    
    while(loop_first){
      let loop_second = true;
      const COMPUTER_NUM = await this.setNumber();
      //console.log(COMPUTER_NUM)

      while(loop_second){
        const PLAYER_NUM = await this.getPlayerNumber();
        loop_second = await this.compare(COMPUTER_NUM, PLAYER_NUM);
      }

      const CONTINUE_NUM = await this.continueGame();
      if (CONTINUE_NUM == 2){
        MissionUtils.Console.print("게임 종료");
        loop_first = false
      }
    }
  }
}

export default App;

const app = new App();
app.play();