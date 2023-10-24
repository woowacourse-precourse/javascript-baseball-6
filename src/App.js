import { Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    const RANDOM_VALUE = this.getRandomNumber();
  }

  getRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return `${computer[0]}${computer[1]}${computer[2]}`;
  }
}

export default App;
