import { Console } from "@woowacourse/mission-utils";
import { MESSAGE, RESET_OPTIONS, ERROR } from "./Constants.js";

const resetNumberCheck = (input) => {
  if (!Object.values(RESET_OPTIONS).includes(input)) {
    throw new Error(ERROR.RESET);
  }
};

class User {
  constructor() {}

  async resetInput() {
    const USER_INPUT = await Console.readLineAsync(MESSAGE.GAME_RESET);
    resetNumberCheck(USER_INPUT);
    return USER_INPUT;
  }
}

export default User;
