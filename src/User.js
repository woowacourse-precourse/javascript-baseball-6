import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from './messages.js';

class User {
  /**
   * @type number array
   */
  #userNum;

  constructor() {}

  async getUserNumber() {
    await Console.readLineAsync(MESSAGES.INPUT_NUMBER).then(async (number) => {
      this.#userNum = [...number].map(Number);
    });
  }

  get userNum() {
    return this.#userNum;
  }
}

export default User;
