import { Console } from '@woowacourse/mission-utils';

export const View = {
  async readUserNumber() {
    return await Console.readLineAsync(MESSAGE.READ.USER_NUMBER);
  },

  print(message) {
    Console.print(message);
  },
};
