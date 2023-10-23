import Baseball from "../domain/Baseball.js";
import RandomNumberGenerator from "../utils/RandomNumberGenerator.js";
import InputValidator from "../utils/InputValidator.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import { StaticNumber } from "../domain/Constant.js";

class BaseballGameController {
  #baseball;

  constructor() {
    this.#baseball = new Baseball(
      RandomNumberGenerator.generateRandomNumber(
        StaticNumber.BASEBALL_NUMBER_LENGTH
      )
    );
  }

  async startGame() {
    OutputView.printStartMessage();
    await this.inputUserNumber();
  }

  async inputUserNumber() {
    await InputView.readUserNumber((input) => {
      InputValidator.validateUserNumber(input);
      this.calculateCount(input);
    });
  }

  async inputRestartNumber() {
    await InputView.readRestartNumber((input) => {
      InputValidator.validateRestartNumber(input);
      if (input === StaticNumber.INPUT_RESTART_NUMBER) {
        this.resetGame();
      }
      if (input === StaticNumber.INPUT_END_NUMBER) return;
    });
  }

  calculateCount(input) {
    const inputNumber = Array.from(input, Number);
    const strikeCount = this.#baseball.getStrikeCount(inputNumber);
    const ballCount = this.#baseball.getBallCount(inputNumber, strikeCount);

    return this.checkHint(strikeCount, ballCount);
  }

  checkHint(strikeCount, ballCount) {
    OutputView.printHintMessage(ballCount, strikeCount);

    if (strikeCount === StaticNumber.BASEBALL_NUMBER_LENGTH) {
      OutputView.printEndMessage();
      return this.inputRestartNumber();
    }
    this.inputUserNumber();
  }

  async resetGame() {
    this.#baseball.getResetNumber();
    await this.inputUserNumber();
  }
}
export default BaseballGameController;
