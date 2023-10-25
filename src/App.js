import { Random, Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.computer = this.generateRandomNumber();
  }

  generateRandomNumber() {
    const numbers = new Set();
    while (numbers.size < 3) {
      numbers.add(Random.pickNumberInRange(1, 9));
    }
    return [...numbers];
  }

  async readUserInput() {
    Console.print("숫자를 입력해주세요 : ");
    return await Console.readLineAsync();
  }

  validateInput(input) {
    if (
      isNaN(input) ||
      input.includes("0") ||
      input.length !== 3 ||
      new Set(input).size !== 3
    ) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }

  getHint(userInput) {
    let ball = 0,
      strike = 0;

    for (let i = 0; i < 3; i++) {
      if (userInput[i] == this.computer[i]) {
        strike++;
      } else if (this.computer.includes(userInput[i])) {
        ball++;
      }
    }

    return { ball, strike };
  }

  async displayResult({ ball, strike }) {
    if (ball === 0 && strike === 0) {
      Console.print("낫싱");
    } else {
      const results = [];
      if (strike) results.push(`${strike}스트라이크`);
      if (ball) results.push(`${ball}볼`);
      Console.print(results.join(" "));
    }
  }

  async askToPlayAgain() {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    const response = await Console.readLineAsync();
    if (response !== "1" && response !== "2") {
      throw new Error("[ERROR] 1 또는 2를 입력해주세요.");
    }
    return response === "1";
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    while (true) {
      const userInput = await this.readUserInput();
      this.validateInput(userInput);
      const { ball, strike } = this.getHint(userInput);
      await this.displayResult({ ball, strike });

      if (strike === 3) {
        if (await this.askToPlayAgain()) {
          this.computer = this.generateRandomNumber();
        } else {
          break;
        }
      }
    }
  }
}

export default App;
