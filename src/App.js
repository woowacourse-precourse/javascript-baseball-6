import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  computerNumber(){
    const computer = [];
    while(computer.length < 3 ){
      const number = MissionUtils.Random.pickNumberInRange(1,9);
      if(!computer.includes(number)){
        computer.push(number);
      }
    }
    return computer;
  }
 
  checkResult(computer,player){
    let strike = 0, ball =0;
    for (let i = 0;i<3;i++){
      if(computer[i]===player[i]){
        strike++;
      }else if(player.includes(computer[i])){
        ball++;
      }
    }
    return strike,ball;
  }
  printResult(strike,ball){
    if (ball===0&&strike>0){      
      if (strike ===3){
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      }else{
        MissionUtils.Console.print(`${strike}스트라이크`);
      }
    }
    if(ball>0){
      if (strike===0){
        MissionUtils.Console.print(`${ball}볼`);
      }else{
        MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
      }
    }
    if(ball===0&&strike===0){
      MissionUtils.Console.print("낫싱")
    }
  }
  playerErrorCheck(player){
    if (player.length !== 3) {
      throw new Error("3자리 숫자를 입력해주세요");
    }
    // if (typeof query !== "string") {
    //   throw new Error("query must be string");
    // }

    // if (typeof callback !== "function") {
    //   throw new Error("callback must be function");
    // }

    // if (callback.length !== 1) {
    //   throw new Error("callback must have 1 argument");
    // }
    
    
  }
  restartInputErrorCheck(){

  }

  async play() {
    let restart = true;

    while(restart){
      restart = await this.playGame();
    }
  }

  async playGame(){
    await MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const computer = this.computerNumber();

    while (st !==3){
      try{
        const player = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
        this.playerErrorCheck(player);
        const [strike,ball] = this.checkResult(computer, player);
        this.printResult(strike,ball);
      }
      catch(e){
        MissionUtils.Console.print("[ERROR]"+e);
      }
    }

    const restartInput =MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",)

    return restartInput === "1";
  }
}

export default App;
