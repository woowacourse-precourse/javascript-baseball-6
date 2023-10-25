import { Console } from '@woowacourse/mission-utils';
import { InputViewError } from '../Model/Error.js';
import { ERROR } from '../constants/error.js';

const EMPTY_STRING = '';

export const InputView = {
  async readLineAsync(message) {
    const userInput = await Console.readLineAsync(message);

    if (userInput === EMPTY_STRING)
      throw new InputViewError(ERROR.MESSAGE.EMPTY_INPUT);

    return userInput;
  },
};
