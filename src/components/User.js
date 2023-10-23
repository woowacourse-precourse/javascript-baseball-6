import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGE, ERROR_MESSAGE } from '../constants/constants.js';

class User {
  /**
   * 입력받은 숫자를 배열 형태로 리턴
   * @returns {number[]} 유저가 입력한 숫자 배열
   */
  async getNumber() {
    /** @type {string} */
    const input = await Console.readLineAsync(GAME_MESSAGE.INPUT_MESSAGE);
    this.validateInput(input);

    return input.split('').map(Number);
  }

  /**
   * 입력받은 input의 유효성 검사
   * @param {string} input 입력받은 숫자(문자열)
   * @throws [ERROR]메시지
   */
  validateInput(input) {
    const removeDuplicated = new Set(input.split('').map(Number));

    if (isNaN(Number(input))) throw new Error(ERROR_MESSAGE.INPUT_ONLY_NUMBER);
    if (input.length !== 3) throw new Error(ERROR_MESSAGE.NUMBER_LENGTH_MUST_THREE);
    if (removeDuplicated.size !== 3) throw new Error(ERROR_MESSAGE.DUPLICATE_NUMBER);
  }
}

export default User;
