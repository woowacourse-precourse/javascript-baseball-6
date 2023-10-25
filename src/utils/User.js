import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./Constants.js";
import ErrorHandler from "./ErrorHandler.js";

class User {
  constructor() {
    this.errorHandler = new ErrorHandler();
  }

  async answerInput() {
    try {
      const USER_INPUT = await Console.readLineAsync(MESSAGE.USER_INPUT);
      this.errorHandler.answerNumberCheck(USER_INPUT);
      return USER_INPUT;
    } catch (error) {
      throw error;
    }
  }

  async resetInput() {
    try {
      const USER_INPUT = await Console.readLineAsync(MESSAGE.GAME_RESET);
      this.errorHandler.resetNumberCheck(USER_INPUT);
      return USER_INPUT;
    } catch (error) {
      throw error;
    }
  }
}

export default User;
