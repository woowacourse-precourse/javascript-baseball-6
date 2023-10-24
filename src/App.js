import { Console } from "@woowacourse/mission-utils";

class App {
  computer;
  userNumber;

  constructor() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.computer = [];
    this.userNumber = [];
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

    this.validateUserInput(inputValue);
  }

  validateUserInput(str) {
    this.userNumber = [];
    if (str.length < 4) {
      for (const i in str) {
        if (!isNaN(str[i]) && !this.userNumber.includes(str[i])) {
          this.userNumber.push(str[i]);
        } else {
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
      }
    } else {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }
}

export default App;
