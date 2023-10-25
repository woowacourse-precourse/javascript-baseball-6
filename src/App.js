import { Random, Console } from "@woowacourse/mission-utils";

const STRIKE_COUNT_TO_WIN = 3;

class App {
  constructor() {
    this.computerNumber = this.generateComputerNumber();
    this.isGameRunning = true;
  }

  generateComputerNumber() {
    const numbers = Array.from({ length: 9 }, (_, index) => index + 1);
    const computerNumber = [];
    while (computerNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computerNumber.includes(number)) {
        computerNumber.push(number);
      }
    }
    return computerNumber;
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    while (this.isGameRunning) {
      const userNumber = await this.getUserInput();
      if (!this.validateInput(userNumber)) {
        Console.print("잘못된 입력입니다. 다시 입력해주세요.");
        continue;
      }
      const [ball, strike] = this.compareNumbers(userNumber);
      this.printResult(ball, strike);
      if (strike === STRIKE_COUNT_TO_WIN) {
        this.isGameRunning = false;
        Console.print(
          `${STRIKE_COUNT_TO_WIN}개의 숫자를 모두 맞히셨습니다! 게임 종료`
        );
        await this.askReplay();
      }
    }
  }

  async getUserInput() {
    const input = await Console.readLineAsync("숫자를 입력해주세요 : ");
    if (input == null || input.trim() === "") {
      throw new Error("[ERROR] 입력값이 유효하지 않습니다.");
    }
    return input.trim().split("").map(Number);
  }

  validateInput(input) {
    if (input.length !== 3 || new Set(input).size !== 3 || input.some(isNaN)) {
      return false;
    }
    return true;
  }

  compareNumbers(userNumber) {
    let ball = 0;
    let strike = 0;
    userNumber.forEach((num, index) => {
      if (this.computerNumber.includes(num)) {
        if (this.computerNumber[index] === num) {
          strike += 1;
        } else {
          ball += 1;
        }
      }
    });
    return [ball, strike];
  }

  printResult(ball, strike) {
    if (ball === 0 && strike === 0) {
      Console.print("낫싱");
    } else if (ball === 0) {
      Console.print(`${strike}스트라이크`);
    } else if (strike === 0) {
      Console.print(`${ball}볼`);
    } else {
      Console.print(`${ball}볼 ${strike}스트라이크`);
    }
  }

  async askReplay() {
    const answer = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요: "
    );
    if (answer === "1") {
      this.computerNumber = this.generateComputerNumber();
      this.isGameRunning = true;
      this.play();
    } else if (answer === "2") {
      Console.print("게임을 종료합니다.");
    } else {
      Console.print("잘못된 입력입니다. 게임을 종료합니다.");
    }
  }
}

export default App;
