import { getUniqueNumbersInRange } from './utils.js';
import { ERROR_MESSAGES } from './constants.js';

export const isValidUserNumber = (input) => {
  if (!isAllCorrectRangeDigits(input)) {
    throw new Error(ERROR_MESSAGES.NOT_DIGIT_IN_RANGE);
  }
  if (!isThreeDigits(input)) {
    throw new Error(ERROR_MESSAGES.NOT_THREE_DIGITS);
  }

  if (!isNotDuplicate(input)) {
    throw new Error(ERROR_MESSAGES.DUPLICATE);
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

const isNotDuplicate = (input) => {
  const numbers = [];
  input.split('').forEach((digit) => {
    if (!numbers.includes(+digit)) {
      numbers.push(+digit);
    }
  });
  if (numbers.length === 3) return true;
};

export const isValidRestartNumber = (input) => {
  if (input !== '1' && input !== '2') {
    throw new Error(ERROR_MESSAGES.NOT_CORRECT_RESTART_NUMBER);
  }
  return true;
};
