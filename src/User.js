import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, isValidInput } from './utils/index.js';

class User {
  #number;

  getNumber() {
    return this.#number;
  }
  async resetNumber() {
    try {
      const number = await MissionUtils.Console.readLineAsync(
        '숫자를 입력해주세요 : '
      );

      if (!isValidInput(number)) {
        throw new Error(ERROR_MESSAGE.incorrectNumberFormat);
      }
      this.#number = number;
    } catch (error) {
      throw error;
    }
  }
}

export default User;
