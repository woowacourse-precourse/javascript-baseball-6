import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    const RANDOM_VALUE = this.getRandomNumber();
    const INPUT_VALUE = await this.getInputNumber();

    this.checkInput(INPUT_VALUE);
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

  // 입력 값이 숫자가 아니거나, 중복을 제거한 길이가 3이 아니면 throw error
  checkInput(input) {
    try {
      const setInput = [...new Set(input)];

      if (isNaN(parseInt(input)) || setInput.length !== 3) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
    } catch (e) {
      console.error(e);
    }
  }
}

export default App;
