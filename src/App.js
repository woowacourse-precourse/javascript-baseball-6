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



  async play() {

  }
}


export default App;
