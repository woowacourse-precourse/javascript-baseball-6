import { getUniqueNumbersInRange } from './utils.js';
import { ERROR_MESSAGES } from './constants.js';

export const isValidUserNumber = (input) => {
  if (!isAllCorrectRangeDigits(input)) {
    throw new Error(ERROR_MESSAGES.NOT_DIGIT_IN_RANGE);
  }
  if (!isThreeDigits(input)) {
    throw new Error(ERROR_MESSAGES.NOT_THREE_DIGITS);
  }
  return true;
};

const isAllCorrectRangeDigits = (input) => {
  const possibleDigits = getUniqueNumbersInRange(1, 9, 9);
  if (input.split('').every((character) => possibleDigits.includes(+character))) return true;
};

const isThreeDigits = (input) => {
  if (input.length === 3) return true;
};
