import BaseballGame from "../domain/BaseballGame.js";
import randomNumberGenerator from "../utils/RandomNumberGenerator.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import { StaticNumber } from "../domain/Constant.js";

class BaseballGameController {
  #baseball;

  constructor(size) {
    this.#baseball = new BaseballGame(randomNumberGenerator.generate(size));
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
      if (input === StaticNumber.RESTART_NUMBER) {
        this.resetGame();
      }
      if (input === StaticNumber.END_NUMBER) return;
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

    if (strikeCount === StaticNumber.ANSWER_NUMBER_LENGTH) {
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
