import { Console } from '@woowacourse/mission-utils';

class User {
  constructor() {
    /** @type {number[]} */
    this.user = [];
  }

  /**
   * 입력받은 숫자를 배열 형태로 리턴
   * @returns {number[]} 유저가 입력한 숫자 배열
   */
  async getNumber() {
    /** @type {string} */
    const input = await Console.readLineAsync('숫자를 입력해주세요 : ');

    this.user = input.split('').map(Number);
    return this.user;
  }
}

export default User;
