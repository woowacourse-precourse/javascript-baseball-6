import { Random, Console } from "@woowacourse/mission-utils";
import { NumberBaseballGame } from "./NumberBaseballGame.js";

export class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    let continuePlay = true;
    while (continuePlay) {
      const computerNumbers = this.generateComputerNumbers();
      const game = new NumberBaseballGame(computerNumbers);
      const isGameOver = await game.play();
      if (isGameOver) {
        continuePlay = await this.askForNewGame();
      }
    }
  }

  generateComputerNumbers() {
    const computerNumbers = [];
    while (computerNumbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computerNumbers.includes(number)) {
        computerNumbers.push(number);
      }
    }
    return computerNumbers;
  }

  async askForNewGame() {
    const select = Number(
      await Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. "
      )
    );

    return select === 1;
  }
}

export default App;
