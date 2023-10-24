import { MissionUtils } from '@woowacourse/mission-utils';
import {
  ERROR_MESSAGES,
  GAME_MESSAGES,
  NUMBER_COUNT,
  NUMBER_REGEX,
  VALID_USER_INPUTS,
} from './constants.js';

const UserInput = {
  async getUserInputAsync() {
    try {
      const userInput = await MissionUtils.Console.readLineAsync(
        GAME_MESSAGES.INPUT_NUMBERS
      );
      this.isValidInputForBaseballGame(userInput);
      return userInput;
    } catch (error) {
      throw error;
    }
  },

  async playAgainInputAsync() {
    try {
      const userInput = await MissionUtils.Console.readLineAsync(
        GAME_MESSAGES.INPUT_RESTART
      );
      this.isValidRestartInputForBaseballGame(userInput);
      return userInput;
    } catch (error) {
      throw error;
    }
  },

  isValidInputForBaseballGame(userInput) {
    const numberArray = userInput.split('').map(Number);

    const isValidNumber = numberArray.every((num) => NUMBER_REGEX.test(num));
    if (!isValidNumber) {
      throw new Error(ERROR_MESSAGES.INVALID_NUMBER);
    }

    if (numberArray.length !== NUMBER_COUNT) {
      throw new Error(ERROR_MESSAGES.INVALID_NUMBER_COUNT);
    }

    if (new Set(numberArray).size !== NUMBER_COUNT) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_NUMBERS);
    }

    return true;
  },

  isValidRestartInputForBaseballGame(userInput) {
    if (
      userInput === VALID_USER_INPUTS.RESTART ||
      userInput === VALID_USER_INPUTS.EXIT
    ) {
      return true;
    }
    throw new Error(ERROR_MESSAGES.INVALID_RESTART_INPUT);
  },
};

export default UserInput;
