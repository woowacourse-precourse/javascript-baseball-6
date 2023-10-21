import { Console } from "@woowacourse/mission-utils";
import Baseball from "../domain/Baseball.mjs";
import RandomNumberGenerator from "../utils/RandomNumberGenerator.mjs";
import InputView from "../view/InputView.mjs";
import OutputView from "../view/OutputView.mjs";
import InputValidator from "../utils/InputValidator.mjs";

class BaseballGameController {
  #baseball;

  constructor() {
    this.#baseball = new Baseball(
      RandomNumberGenerator.generateRandomNumber(3)
    );
  }

  startGame() {
    OutputView.printStartMessage();
    this.inputUserNumber();
  }

  inputUserNumber() {
    InputView.readUserNumber((input) => {
      InputValidator.validateUserNumber(input);
      const inputNumber = input.split("").map(Number);
      const strikeCount = this.#baseball.getStrikeCount(inputNumber);
      const ballCount = this.#baseball.getBallCount(inputNumber, strikeCount);

      return this.checkHint(strikeCount, ballCount);
    });
  }

  inputRestart() {
    InputView.readRestartNumber((input) => {
      InputValidator.validateRestartNumber(input);
      if (input === "1") {
        this.resetGame();
        this.inputUserNumber();
      }
      if (input === "2") return Console.close();
    });
  }

  checkHint(strikeCount, ballCount) {
    OutputView.printHintMessage(ballCount, strikeCount);

    if (strikeCount === 3) {
      OutputView.printEndMessage();
      return this.inputRestart();
    }

    this.inputUserNumber();
  }
}
export default BaseballGameController;
