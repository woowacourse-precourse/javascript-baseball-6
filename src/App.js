import { Console } from "@woowacourse/mission-utils";

class App {
  computer;

  constructor() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.computer = [];
  }

  async play() {
    this.getRandomNumber();
    await this.getUserInput();
  }

  getRandomNumber() {
    this.computer = [];
    while (this.computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);

      if (!this.computer.includes(number)) {
        this.computer.push(number);
      }
    }
  }

  async getUserInput() {
    const inputValue = await Console.readLineAsync("숫자를 입력해주세요 : ");
  }
}

export default App;
