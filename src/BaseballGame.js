import { MissionUtils } from "@woowacourse/mission-utils";
import { isValid } from "./isValid";
import MESSAGES from "./Messages";
import Computer from "./Computer";

class BaseballGame {
  constructor(minNumber, maxNumber, numberLength) {
    this.computer = new Computer(minNumber, maxNumber, numberLength);
    this.restartNumber = "1";
    this.exitNumber = "2";
    this.isWinnerDefined = false;
  }

  async start() {
    const computerAnswer = this.computer.generateAnswer();
    this.computer.setAnswer(computerAnswer);

    try {
      while (!this.isWinnerDefined) {
        const userInput = await this.getUserInput();
        this.checkScore(userInput);
      }
    } catch (error) {
      throw error;
    }

    if (this.isWinnerDefined) MissionUtils.Console.print(MESSAGES.USER_WIN);

    try {
      this.handleRestart();
    } catch (error) {
      throw error;
    }
  }

  async getUserInput() {
    const userInput = await MissionUtils.Console.readLineAsync(
      MESSAGES.GET_INPUT_NUMBER
    );
    let isUserInputValid;

    try {
      isUserInputValid = isValid(userInput);
      if (!isUserInputValid) throw Error(MESSAGES.ERROR.INVALID_INPUT_NUMBER);
    } catch (error) {
      throw error;
    }

    return userInput;
  }

  checkScore(userInput) {
    const [ball, strike, isWinnerDefined] = this.computer.rateScore(userInput);
    this.computer.printScoreMessage(ball, strike);
    this.isWinnerDefined = isWinnerDefined;
  }

  async handleRestart() {
    MissionUtils.Console.print(MESSAGES.RESTART);
    const restart_or_exit = await MissionUtils.Console.readLineAsync();

    if (restart_or_exit === this.restartNumber) {
      this.restart();
    } else if (restart_or_exit === this.exitNumber) {
      MissionUtils.Console.print(MESSAGES.GAME_END);
    } else {
      throw Error(MESSAGES.ERROR.INVALID_RESTART_NUMBER);
    }
  }

  restart() {
    this.isWinnerDefined = false;
    this.start();
  }
}

export default BaseballGame;
