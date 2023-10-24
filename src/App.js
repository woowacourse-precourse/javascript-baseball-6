import { Random } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.secretNumber = [];
  }
  genSecretNumber() {
    while (this.secretNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.secretNumber.includes(number)) {
        this.secretNumber.push(number);
      }
    }
  }
  async play() {
    this.genSecretNumber();
  }
}

export default App;
