import { Console } from '@woowacourse/mission-utils';
import { InputViewError } from '../Model/Error.js';
import { MESSAGE } from '../constants/message.js';

const EMPTY_STRING = '';

export const InputView = {
  async readLineAsync(message) {
    const userInput = await Console.readLineAsync(message);

    if (userInput === EMPTY_STRING)
      throw new InputViewError(MESSAGE.ERROR.EMPTY_INPUT);

    return userInput;
  },
};
