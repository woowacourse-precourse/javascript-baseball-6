import { Console } from "@woowacourse/mission-utils";
import * as m from "./constants/message.js";
import * as c from "./constants/const.js";

export class User {
  async inputAnswer() {
    try {
      const userInput = await Console.readLineAsync(m.INPUT_MESSAGE);
      if (!this.isValidAnswerInput(userInput)) {
        throw Error(m.INPUT_ERROR);
      }
      return userInput;
    } catch (error) {
      throw Error(m.INPUT_ERROR);
    }
  }

  async inputRetry() {
    try {
      const userInput = await Console.readLineAsync(m.RESTART_MESSAGE);
      if (!this.isValidRetryInput(userInput)) {
        throw new Error(m.INPUT_ERROR);
      }
      return userInput;
    } catch (error) {
      throw new Error(m.INPUT_ERROR);
    }
  }

  isValidAnswerInput(userInput) {
    if (isNaN(userInput)) return false;
    if (userInput.length !== 3) return false;
    return true;
  }

  isValidRetryInput(userInput) {
    if (isNaN(userInput)) return false;
    if (userInput !== c.RESTART_INPUT && userInput !== c.QUIT_INPUT)
      return false;
    return true;
  }
}
