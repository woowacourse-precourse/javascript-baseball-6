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

  async play() {}

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
}

export default App;
