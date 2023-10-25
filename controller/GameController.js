import { MissionUtils } from "@woowacourse/mission-utils";
import InputView from "../views/InputView.js";
import OutputView from "../views/OutputView.js";
import createRandomNumber from "../utils/CreateRandomNumber.js";
import ERROR from "../src/Error.js";
import Value from "../src/Value.js";

class GameController {
  startGame() {
    // OutputView.printStartMessage();
    this.resetCounts()
    this.createComputerNumber();
    this.inputNumber();
  }

  resetCounts() {
    this.ballCount = 0;
    this.strikeCount = 0;
  }

  createComputerNumber() {
    this.computer = createRandomNumber();
  }

  async inputNumber() {
    this.resetCounts()
    const userInput = await InputView.inputUserNumber();
    this.validCheck(userInput.split("").map(Number));
  }

  validCheck(number) {
    if (number.some(isNaN))
      throw new Error(ERROR.notNumber);
    if (number.length !== Value.length)
      throw new Error(ERROR.invalidLength);
    if (number.includes(0))
      throw new Error(ERROR.enterZero);
    if (hasDuplication(number))
      throw new Error(ERROR.duplicate);

    this.userInputNumber = number;
    this.countBallStrike();
  }

  countBallStrike() {
    this.userInputNumber.forEach((item, index) => {
      if (item === this.computer[index]) {
        this.strikeCount += 1;
      } else if (this.computer.includes(Number(item))) {
        this.ballCount += 1;
      }
    });
    this.printGameResult();
  }

  printGameResult() {
    MissionUtils.Console.print(OutputView.printResult(this.ballCount, this.strikeCount));
    if (this.strikeCount === 3)
      this.reGame();
    if (this.strikeCount !== 3)
      this.inputNumber();
  }

  async reGame() {
    const inputRegame = await InputView.inputReGame();
    if (inputRegame == 1)
      this.startGame();
    else if (inputRegame == 2)
      return;
    else
      throw new Error(ERROR.invalidRestart);
  }
}

function hasDuplication(array) {
  return (new Set(array)).size !== array.length;
}

export default GameController;
