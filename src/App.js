import { Console, Random } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.computerNumbers = [];
    this.userNumbers = [];
  }

  async play() {
    this.startGame();
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
}
export default App;
