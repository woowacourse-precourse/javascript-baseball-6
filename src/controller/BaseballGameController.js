import Baseball from "../domain/Baseball.js";
import RandomNumberGenerator from "../utils/RandomNumberGenerator.js";
import InputValidator from "../utils/InputValidator.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import { StaticNumber } from "../constant/Constant.js";

class BaseballGameController {
  #baseball;

  constructor() {
    this.#baseball = new Baseball(
      RandomNumberGenerator.generateRandomNumber(StaticNumber.NUMBER_LENGTH)
    );
  }

  async startGame() {
    OutputView.printStartMessage();
    await this.inputUserNumber();
  }

  async inputUserNumber() {
    await InputView.readUserNumber((input) => {
      InputValidator.validateUserNumber(input);
      const inputNumber = input.split("").map(Number);
      const strikeCount = this.#baseball.getStrikeCount(inputNumber);
      const ballCount = this.#baseball.getBallCount(inputNumber, strikeCount);

      return this.checkHint(strikeCount, ballCount);
    });
  }

  async inputRestartNumber() {
    await InputView.readRestartNumber((input) => {
      InputValidator.validateRestartNumber(input);
      if (input === "1") {
        this.resetGame();
      }
      if (input === "2") return;
    });
  }

  checkHint(strikeCount, ballCount) {
    OutputView.printHintMessage(ballCount, strikeCount);

    if (strikeCount === StaticNumber.NUMBER_LENGTH) {
      OutputView.printEndMessage();
      this.inputRestartNumber();
    } else this.inputUserNumber();
  }

  async resetGame() {
    this.#baseball.getReset();
    await this.inputUserNumber();
  }
}
export default BaseballGameController;
