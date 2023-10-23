import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/message.js';

export const View = {
  async readUserNumber() {
    return await Console.readLineAsync(MESSAGE.READ.USER_NUMBER);
  },

  print(message) {
    Console.print(message);
  },
};
