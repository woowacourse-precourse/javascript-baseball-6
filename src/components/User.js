import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from '../constants/constants.js';
import { validateInput } from '../utils/validate.js';

class User {
  /**
   * 입력받은 숫자를 배열 형태로 리턴
   * @returns {number[]} 유저가 입력한 숫자 배열
   */
  async getNumber() {
    /** @type {string} */
    const input = await Console.readLineAsync(GAME_MESSAGE.INPUT_MESSAGE);
    validateInput(input);

    return input.split('').map(Number);
  }
}

export default User;
