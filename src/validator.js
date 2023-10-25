import { isNumeric, isUniqueDigits } from './utils.js';

export const isValidGameInputDuringGame = (userInputValue) => userInputValue.toString().length === 3
  && isUniqueDigits(userInputValue) && isNumeric(userInputValue);
