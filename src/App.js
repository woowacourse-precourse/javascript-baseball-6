import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.initialize();
  }

  initialize(){
    this.randomNumberList = [];
    this.ball = 0;
    this.strike = 0;
    this.isPlaying = true;
    while (this.randomNumberList.length < 3) {
      const RANDOM_NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.randomNumberList.includes(RANDOM_NUMBER))
        this.randomNumberList.push(RANDOM_NUMBER);
    }
  }

  executeInput(input) {
    let input_list = input.split("").map((data) => Number(data));
    this.ball = 0;
    this.strike = 0;
    for (let i = 0; i < input_list.length; i++) {
      if (this.randomNumberList[i] == Number(input_list[i])) this.strike++;
      else if (this.randomNumberList.includes(input_list[i])) this.ball++;
    }
  }

  async play() {

    while(this.isPlaying){
      MissionUtils.Console.print("숫자 야구게임을 시작합니다.");
  
      while(this.strike < 3){
        let input = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
        this.executeInput(input);
        if(this.ball == 0 && this.strike == 0) MissionUtils.Console.print("낫싱")
        else {
          MissionUtils.Console.print(`${this.ball > 0 ? `${this.ball}볼` : ""}${this.ball > 0 && this.strike > 0 ? " " : ""}${this.strike > 0 ? `${this.strike}스트라이크` : ""}`);
        }
      }

      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      
      let input = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");
      switch (input) {
        case '1':
          this.initialize()
          break;
        case '2':
          this.isPlaying = false;
          break;
        default: 
          break;
      }
    }
  }
}

export default App;
