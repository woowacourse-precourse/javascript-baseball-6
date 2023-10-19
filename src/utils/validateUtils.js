import { ERROR_MESSAGES, GAME_CONSTANTS, USER_COMMANDS } from "./constants.js";

export const validateUtils = {
  validateNumbers(numbers) {
    if (numbers.length !== GAME_CONSTANTS.ANSWER_LENGTH) {
      throw new Error(ERROR_MESSAGES.INVALID_NUMBERS);
    }
    if (!isValidIntegers(numbers) || hasDuplicateNumber(numbers)) {
      throw new Error(ERROR_MESSAGES.INVALID_NUMBERS);
    }
  },
  validateCommand(command) {
    if (!isValidCommand(command)) {
      throw new Error(ERROR_MESSAGES.INVALID_COMMAND);
    }
  },
};

function isValidIntegers(input) {
  const arr = input.split("");
  arr.forEach((item) => {
    if (parseFloat(item) !== parseInt(item)) {
      return false;
    }
    if (parseInt(item) < GAME_CONSTANTS.MIN_NUMBER) {
      return false;
    }
  });
  return true;
}

function hasDuplicateNumber(input) {
  const arr = input.split("");
  return arr.length !== new Set(arr).size;
}

function isValidCommand(input) {
  return input === USER_COMMANDS.RESTART || input === USER_COMMANDS.QUIT;
}
