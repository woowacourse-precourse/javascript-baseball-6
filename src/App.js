import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    const RANDOM_VALUE = this.getRandomNumber();
    const INPUT_VALUE = await this.getInputNumber();
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

  async getInputNumber() {
    try {
      const input = await Console.readLineAsync("숫자를 입력해주세요 : ");
      return input;
    } catch (e) {
      console.error(e);
    }
  }
}

export default App;
