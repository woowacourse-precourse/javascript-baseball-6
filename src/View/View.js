import { Console } from '@woowacourse/mission-utils';

export const View = {
  async readLineAsync(message) {
    return await Console.readLineAsync(message);
  },

  print(message) {
    Console.print(message);
  },
};
