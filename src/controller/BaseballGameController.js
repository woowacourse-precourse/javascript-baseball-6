import Baseball from "../domain/Baseball.js";
import RandomNumberGenerator from "../utils/RandomNumberGenerator.js";
import InputValidator from "../utils/InputValidator.js";
import OutputView from "../view/OutputView.js";
import { Console } from "@woowacourse/mission-utils";
import { GuideMessage } from "../constant/Constant.js";

class BaseballGameController {
  #baseball;

  constructor() {
    this.#baseball = new Baseball(
      RandomNumberGenerator.generateRandomNumber(3)
    );
  }

  async startGame() {
    OutputView.printStartMessage();
    await this.readUserNumber();
  }

  async readUserNumber() {
    try {
      const input = await Console.readLineAsync(GuideMessage.INPUT_NUMBER);
      InputValidator.validateUserNumber(input);
      this.callback(input);
    } catch (error) {
      throw error;
    }
  }

  async readRestartNumber() {
    try {
      const input = await Console.readLineAsync(GuideMessage.RESTART_GAME);
      InputValidator.validateRestartNumber(input);
      if (input === "1") {
        this.resetGame();
      }
      if (input === "2") return;
    } catch (error) {
      throw error;
    }
  }

  callback(userNumber) {
    const inputNumber = userNumber.split("").map(Number);
    const strikeCount = this.#baseball.getStrikeCount(inputNumber);
    const ballCount = this.#baseball.getBallCount(inputNumber, strikeCount);

    this.checkHint(strikeCount, ballCount);
  }

  checkHint(strikeCount, ballCount) {
    OutputView.printHintMessage(ballCount, strikeCount);

    if (strikeCount === 3) {
      OutputView.printEndMessage();
      this.readRestartNumber();
    } else this.readUserNumber();
  }

  async resetGame() {
    this.#baseball.resetGame();
    await this.readUserNumber();
  }
}
export default BaseballGameController;
