import { Random, Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.computerNumbers = [];
    this.userNumbers = [];
    this.attempts = 0;
    this.isGameOver = false;

    this.generateComputerNumbers();
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
}
export default App;
