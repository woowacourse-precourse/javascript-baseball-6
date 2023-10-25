import { Random, Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.computerNumbers = [];
    this.userNumbers = [];
    this.attempts = 0;
    this.isGameOver = false;

    this.generateComputerNumbers();
  }
  async play() {
    this.generateComputerNumbers();
    while (!this.isGameOver) {
      this.getUserInput();
      this.calculateResult();
      this.printResult();
      if (this.isGameOver) {
        this.playAgain();
      }
    }
  }

  generateComputerNumbers() {
    this.computerNumbers = [];
    for (let i = 0; i < 3; i++) {
      this.computerNumbers.push(Math.floor(Math.random() * 9 + 1));
    }
  }

  getUserInput() {
    const input = Promise.resolve(Console.readLineAsync());
    try {
      this.userNumbers = input.split(" ").map(Number);
      if (this.userNumbers.length !== 3) {
        throw new Error("숫자를 3개 입력하세요.");
      }
    } catch (error) {
      console.error(error);
      return;
    }
  }

  calculateResult() {
    const strike = this.computerNumbers.reduce(
      (acc, number) => acc + this.userNumbers.indexOf(number) !== -1,
      0
    );
    const ball =
      this.computerNumbers.reduce(
        (acc, number) => acc + this.userNumbers.includes(number),
        0
      ) - strike;
    this.result = { strike, ball };
  }

  printResult() {
    console.log(`스트라이크: ${this.result.strike}, 볼: ${this.result.ball}`);
  }

  playAgain() {
    console.log("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    const playAgain = Promise.resolve(Console.readLineAsync());
    if (playAgain === "1") {
      this.computerNumbers = [];
      this.userNumbers = [];
      this.attempts = 0;
      this.isGameOver = false;
      this.play();
    } else {
      console.log("게임을 종료합니다.");
      process.exit();
    }
  }
}

const app = new App();
app.play();

export default App;
