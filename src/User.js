import { MissionUtils } from '@woowacourse/mission-utils';
import { isValidInput } from './utils';

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
        throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
      }
      this.#number = number;
    } catch (error) {
      throw error;
    }
  }
}

export default User;
