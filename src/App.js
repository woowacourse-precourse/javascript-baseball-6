import { Console, Random } from "@woowacourse/mission-utils";

class App {
  computer;

  constructor() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.computer = [];
  }

  async play() {
    this.computer = this.getRandomNumber();
    const userInput = await this.getUserInput();
    this.validateUserInput(userInput);
    await this.getGameResult(this.computer, userInput);
  }

  getRandomNumber() {
    const randomNumbers = [];

    while (randomNumbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);

      if (!randomNumbers.includes(number)) {
        randomNumbers.push(number);
      }
    }

    return randomNumbers;
  }

  async getUserInput() {
    const inputValue = await Console.readLineAsync("숫자를 입력해주세요 : ");

    return inputValue;
  }

  validateUserInput(str) {
    const userNumber = [];
    if (str.length < 4) {
      for (const i in str) {
        if (!isNaN(str[i]) && !userNumber.includes(str[i])) {
          userNumber.push(str[i]);
        } else {
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
      }
    } else {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }

  compareNumber(computerNum, inputNum) {
    let strike = 0;
    let ball = 0;
    let nothing = 0;

    computerNum.map((num, i, array) => {
      if (num === Number(inputNum[i])) {
        strike++;
      } else if (array.includes(Number(inputNum[i]))) {
        ball++;
      } else {
        nothing++;
      }
    });

    return { strike, ball, nothing };
  }

  async getGameResult(computerNum, inputNum) {
    this.compareNumber(computerNum, inputNum);

    if (this.strike === 3) {
      Console.print(`${this.strike}스트라이크`);
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.restart();
    } else {
      Console.print(
        `${this.ball === 0 ? "" : this.ball + "볼"} ${
          this.strike === 0 ? "" : this.strike + "스트라이크"
        } ${this.nothing === 3 ? "낫싱" : ""}`.trim()
      );

      const userInput = await this.getUserInput();
      this.validateUserInput(userInput);
      await this.getGameResult(computerNum, userInput);
    }
  }

  async restart() {
    const RESTART_VALUE = "1";
    const EXIT_VALUE = "2";

    const inputValue = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );

    if (inputValue === RESTART_VALUE) {
      this.play();
    } else if (inputValue === EXIT_VALUE) {
      return;
    } else {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }
}

export default App;
