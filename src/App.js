import { Random, Console } from "@woowacourse/mission-utils";

class App {
  play() {}

  generateRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
  }
}

export default App;