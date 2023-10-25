import IOManagerUtil from "../utils/IOManagerUtil.js";
import Validation from "./Validation.js";
import { GAME_MESSAGES } from "./constants.js";

class IOManager {
  async getThreeNumberInput() {
    let userInput = await IOManagerUtil.getUserInput(
      GAME_MESSAGES.ENTER_NUMBERS,
      Validation.validateUserNumbersInput
    );

    return userInput;
  }

  async getEndCommandInput() {
    let userInput = await IOManagerUtil.getUserInput(
      GAME_MESSAGES.ENTER_RESTART_OR_QUIT,
      Validation.validateGameTerminationInput
    );

    return userInput;
  }

  printGameStartMessage() {
    IOManagerUtil.printMessage(GAME_MESSAGES.START);
  }

  printGameEndMessage() {
    IOManagerUtil.printMessage(GAME_MESSAGES.END);
  }

  printGameExitMessage() {
    IOManagerUtil.printMessage(GAME_MESSAGES.EXIT);
  }

  printGameStatus(gameResult) {
    IOManagerUtil.printMessage(gameResult.getResultString());
  }
}

export default IOManager;
