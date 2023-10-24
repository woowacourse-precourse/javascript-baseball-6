import { Console } from '@woowacourse/mission-utils';
import { ErrorMessage, GuideText, SIZE } from '../constant';

export default class User {
  async getUserChoice() {
    const USER_INPUT = await Console.readLineAsync(GuideText.USER_INPUT);

    if (!this.checkValidation(USER_INPUT)) {
      throw new Error(ErrorMessage.INVALID_ANSWER);
    }
    
    return USER_INPUT;
  }

  checkValidation(input) {
    const STR = String(input);
    const PATTERN = /^[1-9]{3}$/;

    return STR.length === SIZE && PATTERN.test(STR);
  }
}
