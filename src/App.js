import { Console, Random } from "@woowacourse/mission-utils";
import { isValidNumbers } from "./utilities";

class App {
  constructor() {
    this.computerNumbers = [];
    this.userNumbers = [];
  }

  async play() {
    this.startGame();

    while (true) {
      await this.getUserInput();
    }
  }

  startGame() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.setComputerNumbers();
  }

  setComputerNumbers() {
    while (this.computerNumbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.computerNumbers.includes(number)) {
        this.computerNumbers.push(number);
      }
    }
  }

  async getUserInput() {
    this.userNumbers = (await Console.readLineAsync("숫자를 입력해주세요 : "))
      .split("")
      .map(Number);
    if (this.userNumbers.length !== 3 || !isValidNumbers(this.userNumbers)) {
      throw new Error("[ERROR] 잘못된 입력입니다.");
    }
  }
}
export default App;
