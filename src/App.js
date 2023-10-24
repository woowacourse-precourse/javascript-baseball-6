import { Random, Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.computer = this.randomGenerator();
    this.isCorrect = false;
  }

  init() {
    this.computer = this.randomGenerator();
    this.isCorrect = false;
  }

  async play() {}

  randomGenerator() {
    const randomNum = [];
    while (randomNum.length < 3) {
      const number = Random.pickNumberInRange(1, 9);

      if (!randomNum.includes(number)) {
        randomNum.push(number);
      }
    }
    return randomNum;
  }
}

export default App;
