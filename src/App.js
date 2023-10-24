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

      const result = this.checkNumbers();
      Console.print(result);

      if (result === "3스트라이크") {
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        // 게임 다시 시작 기능 추가
      }
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

  checkNumbers() {
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < 3; i++) {
      if (this.computerNumbers[i] === this.userNumbers[i]) {
        strikes++;
      } else if (this.computerNumbers.includes(this.userNumbers[i])) {
        balls++;
      }
    }

    if (strikes === 0 && balls === 0) return "낫싱";
    if (strikes === 3) return "3스트라이크";

    return `${balls ? balls + "볼" : ""} ${
      strikes ? strikes + "스트라이크" : ""
    }`.trim();
  }
}
export default App;
