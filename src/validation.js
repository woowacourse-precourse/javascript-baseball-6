import { ERROR_MESSAGES } from './constants.js';

export const isValidUserNumber = async (input) => {
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
  const possibleCharacters = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (let i = 0; i < input.length; i++) {
    if (!possibleCharacters.includes(input[i])) return false;
  }
  return true;
};

const isThreeDigits = (input) => {
  return input.length === 3;
};

const isNotDuplicate = (input) => {
  const numbers = [];
  input.split('').forEach((digit) => {
    if (!numbers.includes(+digit)) {
      numbers.push(+digit);
    }
  });
  return numbers.length === 3;
};

export const isValidRestartNumber = (input) => {
  if (input !== '1' && input !== '2') {
    throw new Error(ERROR_MESSAGES.NOT_CORRECT_RESTART_NUMBER);
  }
  return true;
};
