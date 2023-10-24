import { Console } from '@woowacourse/mission-utils';
import {
  ErrorMessage,
  GuideText,
  SIZE } from '../constant';

export default class User {
  async getUserChoice() {
    const USER_INPUT = await Console.readLineAsync(GuideText.USER_INPUT);
    return this.checkInputValidation(String(USER_INPUT));
  }

  checkInputValidation(INPUT) {
    if (!this.checkInputLength(INPUT)) {
      throw new Error(ErrorMessage.INVALID_LENGTH);
    }

    if (!this.checkInputPattern(INPUT)) {
      throw new Error(ErrorMessage.INVALID_PATTERN);
    }

    return Number(INPUT);
  }

  checkInputLength(INPUT) {
    return INPUT.length === SIZE;
  }

  checkInputPattern(INPUT) {
    return /^[1-9]{3}$/.test(INPUT);
  }
}
