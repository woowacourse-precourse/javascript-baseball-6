import { GAME_OPTION, GAME_SETTINGS } from '../constants/GameSettings.js';
import { ERROR_MESSAGE } from '../constants/Message.js';

const isNumber = (input) => {
  const regExp = /^[1-9]+$/;
  if (!regExp.test(input)) {
    throw new Error(ERROR_MESSAGE.notAValidNumber);
  }
};

const isCorrectLength = (input) => {
  const inputArray = input.split('');
  const inputSet = new Set(inputArray);

  if (
    inputArray.length !== GAME_SETTINGS.numberLength ||
    inputSet.size !== GAME_SETTINGS.numberLength
  ) {
    throw new Error(ERROR_MESSAGE.notAValidNumberLength);
  }
};

export const isCorrectPlayerInput = (input) => {
  isNumber(input);
  isCorrectLength(input);
};

export const isCorrectRetryInput = (input) => {
  if (input !== GAME_OPTION.retry && input !== GAME_OPTION.exit) {
    throw new Error(ERROR_MESSAGE.notAValidRetryCommand);
  }
};
