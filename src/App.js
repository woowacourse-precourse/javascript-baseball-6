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

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    while (!this.isCorrect) {
      const user = await this.userInput(this.isCorrect);
      const { strike, ball } = this.checkInput(this.computer, user);

      if (strike === 0 && ball === 0) {
        Console.print("낫싱");
        continue;
      }

      let answer = "";
      if (ball > 0) {
        answer += `${ball}볼 `;
      }

      if (strike > 0) {
        answer += `${strike}스트라이크`;
      }

      Console.print(answer.trim());

      if (strike === 3) {
        this.isCorrect = true;
        const inputNum = await this.userInput(this.isCorrect);

        if (inputNum === 1) {
          this.init();
          continue;
        }
      }
    }
  }

  async userInput(isCorrect) {
    if (isCorrect) {
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
      const userInput = await Console.readLineAsync("");
      const inputNum = Number(userInput);

      if (inputNum !== 1 && inputNum !== 2) {
        throw new Error("[ERROR]");
      }

      return inputNum;
    }

    const userInput = await Console.readLineAsync("숫자를 입력해주세요 : ");
    const inputArray = Array.from(userInput, Number);
    if (
      !inputArray ||
      inputArray.length !== 3 ||
      inputArray.length !== new Set(inputArray).size
    ) {
      throw new Error("[ERROR]");
    }

    return inputArray;
  }

  async userInput(isCorrect) {
    if (isCorrect) {
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
      const userInput = await Console.readLineAsync("");
      const inputNum = Number(userInput);

      if (inputNum !== 1 && inputNum !== 2) {
        throw new Error("[ERROR]");
      }

      return inputNum;
    }

    const userInput = await Console.readLineAsync("숫자를 입력해주세요 : ");
    const inputArray = Array.from(userInput, Number);
    if (
      !inputArray ||
      inputArray.length !== 3 ||
      inputArray.length !== new Set(inputArray).size
    ) {
      throw new Error("[ERROR]");
    }

    return inputArray;
  }

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

  checkInput(computer, user) {
    let ball = 0;
    let strike = 0;
    user.forEach((num, i) => {
      if (num === computer[i]) {
        strike += 1;
      } else if (computer.includes(num)) {
        ball += 1;
      }
    });

    return { strike, ball };
  }
}

export default App;
