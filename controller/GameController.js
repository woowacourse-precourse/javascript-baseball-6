import { MissionUtils } from "@woowacourse/mission-utils";
import InputView from "../views/InputView.js";
import OutputView from "../views/OutputView.js";
import createRandomNumber from "../utils/CreateRandomNumber.js";

class GameController {
  startGame() {
    OutputView.printStartMessage();
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
  }

}

export default GameController;
