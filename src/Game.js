import { Random, Console } from "@woowacourse/mission-utils";

class Game {
  constructor() {
    this.computerNumber = this.generateComputerNumber();
    this.startGame();
  }

  startGame() {
    Console.print("숫자 야구 게임을 시작합니다.");
    console.log("컴퓨터 숫자:", this.computerNumber);
  }

  generateComputerNumber() {
    const computerNumber = [];

    while (computerNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computerNumber.includes(number)) {
        computerNumber.push(number);
      }
    }
    return computerNumber;
  }
}

export default Game;
