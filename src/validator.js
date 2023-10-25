import { isNumeric, isUniqueDigits } from './utils.js';

// eslint-disable-next-line import/prefer-default-export
export const isValidGameInputDuringGame = (userInputValue) => userInputValue.toString().length === 3
  && isUniqueDigits(userInputValue) && isNumeric(userInputValue);
