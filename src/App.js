import { Console } from "@woowacourse/mission-utils";

class App {
  computer;
  userNumber;
  strike;
  ball;
  nothing;

  constructor() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.computer = [];
    this.userNumber = [];
    this.strike = 0;
    this.ball = 0;
    this.nothing = 0;
  }

  async play() {
    this.getRandomNumber();
    ㄴ;
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

  compareNumber(computerNum, inputNum) {
    computerNum.map((num, i, array) => {
      if (num === Number(inputNum[i])) {
        this.strike += 1;
      } else if (array.includes(Number(inputNum[i]))) {
        this.ball += 1;
      } else {
        this.nothing += 1;
      }
    });
  }

  async getGameResult(computerNum, inputNum) {
    this.resetHint();
    this.compareNumber(computerNum, inputNum);

    if (this.strike === 3) {
      Console.print(`${this.strike}스트라이크`);
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    } else {
      Console.print(
        `${this.ball === 0 ? "" : this.ball + "볼"} ${
          this.strike === 0 ? "" : this.strike + "스트라이크"
        } ${this.nothing === 3 ? "낫싱" : ""}`.trim()
      );

      await this.getUserInput();
      await this.getGameResult(computerNum, this.userNumber);
    }
  }

  resetHint() {
    this.strike = 0;
    this.ball = 0;
    this.nothing = 0;
  }
}

export default App;
