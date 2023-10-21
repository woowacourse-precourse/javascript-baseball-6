import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const computer = this.computerNumber();
  }

  computerNumber() {
    const numbers = [];

    while (numbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }

    return numbers;
  }
}

export default App;
