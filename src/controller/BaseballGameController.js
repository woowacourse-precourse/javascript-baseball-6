import BaseballGame from "../domain/BaseballGame.js";
import randomNumberGenerator from "../utils/RandomNumberGenerator.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

class BaseballGameController {
  #baseball;

  constructor(size) {
    // randomNumberGenerator.generate(size))
    this.#baseball = new BaseballGame([4, 2, 5]);
  }

  async startGame() {
    OutputView.printGameStartMessage();
    await this.readUserGuessNumber();
  }

  async readUserGuessNumber() {
    await InputView.readUserGuessNumber((input) => {
      this.calculateScore(input);
    });
  }

  async readRestartNumber() {
    await InputView.readRestartNumber((input) => {
      if (input === "1") {
        this.resetGame();
      }
      if (input === "2") return;
    });
  }

  calculateScore(input) {
    const userGuessNumber = Array.from(input, Number);
    const strikeCount = this.#baseball.getStrikeCount(userGuessNumber);
    const ballCount = this.#baseball.getBallCount(userGuessNumber, strikeCount);

    return this.checkUserScore(strikeCount, ballCount);
  }

  checkUserScore(strikeCount, ballCount) {
    OutputView.printUserScore(strikeCount, ballCount);

    if (strikeCount == 3) {
      OutputView.printGameOverMessage();
      return this.readRestartNumber();
    }
    this.readUserGuessNumber();
  }

  async resetGame() {
    this.#baseball.resetAnswer();
    await this.readUserGuessNumber();
  }
}
export default BaseballGameController;
