import { Console } from "@woowacourse/mission-utils";
import { MESSAGE, RESET_OPTIONS, ERROR } from "./Constants.js";

const answerNumberCheck = (input) => {
  // 1~9까지의 3자리 수 판단
  const REGEXP = /^\d{3}$/;
  if (!REGEXP.test(input)) {
    throw new Error(ERROR.INPUT_LENGTH);
  }
};

const resetNumberCheck = (input) => {
  if (!Object.values(RESET_OPTIONS).includes(input)) {
    throw new Error(ERROR.RESET);
  }
};

class User {
  constructor() {}

  async answerInput() {
    const USER_INPUT = await Console.readLineAsync(MESSAGE.USER_INPUT);
    answerNumberCheck(USER_INPUT);
    return USER_INPUT;
  }

  async resetInput() {
    const USER_INPUT = await Console.readLineAsync(MESSAGE.GAME_RESET);
    resetNumberCheck(USER_INPUT);
    return USER_INPUT;
  }
}

export default User;
