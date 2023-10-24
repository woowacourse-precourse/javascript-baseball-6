import { MissionUtils } from "@woowacourse/mission-utils";

const { Random, Console } = MissionUtils;

class App {
  constructor() {
    this.computerRandomNums = [];
  }

  makeComputerRandomNums() {
    while (this.computerRandomNums.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.computerRandomNums.includes(number))
        this.computerRandomNums.push(number);
    }
  }

  async play() {}
}

const app = new App();
app.play();

export default App;
