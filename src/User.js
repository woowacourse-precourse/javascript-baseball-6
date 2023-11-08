import { MissionUtils } from '@woowacourse/mission-utils';
import { ANSWER_LENGTH } from './utils';

class User {
  constructor() {}

  static async getUser() {
    const user = await MissionUtils.Console.readLineAsync(
      '숫자를 입력해주세요 : '
    );

    User.#validateUser(user);

    return User.#convertStringToNumberArray(user);
  }

  static #validateUser(user) {
    if (user.length !== ANSWER_LENGTH) {
      throw new Error('[ERROR] Invalid input length.');
    }
    if (isNaN(user)) {
      throw new Error('[ERROR] Invalid input type. Please enter a number.');
    }
    if (user.length !== new Set(user).size) {
      throw new Error('[ERROR] Duplicates are not allowed in the input.');
    }
  }

  static #convertStringToNumberArray(user) {
    return [...user].map((u) => Number(u));
  }
}

export default User;
