import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './constants.js';

class UserInput {
  async getUserNumber() {
    try {
      const NUMBERS = await Console.readLineAsync(MESSAGE.inputUserNumber);
      return NUMBERS;
    } catch (error) {
      throw error;
    };
  };

  async chooseRetry() {
    try {
      Console.print(MESSAGE.allStrike);
      const RETRY_INPUT_NUMBER = await Console.readLineAsync(MESSAGE.askRetry);
      return RETRY_INPUT_NUMBER;
    } catch (error) {
      throw error;
    };
  };
};

export default UserInput;
