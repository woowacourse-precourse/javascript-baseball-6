import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/message.js';
import { validateBaseballNumber } from '../utils/validation.js';

export const View = {
  async readUserNumber() {
    const userNumber = await Console.readLineAsync(MESSAGE.READ.USER_NUMBER);
    const numberList = userNumber.split('');

    validateBaseballNumber(numberList);

    return numberList.map(Number);
  },

  print(message) {
    Console.print(message);
  },
};
