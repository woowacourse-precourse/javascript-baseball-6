import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, GUIDE_TEXT, NUMBER_SIZE } from '../constant.js';

class User {
  async getUserChoice() {
    const USER_INPUT = await Console.readLineAsync(GUIDE_TEXT.USER_INPUT);

    if (!this.checkValidation(USER_INPUT))
      throw new Error(ERROR_MESSAGE.INVALID_ANSWER);
    return USER_INPUT;
  }

  checkValidation(input) {
    const STR = String(input);
    const PATTERN = /^[1-9]{3}$/;

    if (STR.length === NUMBER_SIZE && PATTERN.test(STR)) {
      return true;
    }
    return false;
  }
}

export default User;
