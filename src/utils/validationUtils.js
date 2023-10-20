import { ERROR_MESSAGES, GAME_CONSTANTS, USER_COMMANDS } from "./constants.js";
const { INVALID_NUMBERS, INVALID_COMMAND } = ERROR_MESSAGES;

export const validationUtils = {
  validateNumbers(input) {
    const numbers = input.split("");
    for (const validation of validations) {
      if (!validation.isValid(numbers)) {
        throw new Error(validation.error);
      }
    }
  },
  validateCommand(command) {
    if (!isValidCommand(command)) {
      throw new Error(INVALID_COMMAND);
    }
  },
};

const validations = [
  { isValid: isValidLength, error: INVALID_NUMBERS.LENGTH },
  { isValid: areAllIntegers, error: INVALID_NUMBERS.INTEGER },
  { isValid: areAllWithinRange, error: INVALID_NUMBERS.RANGE },
  { isValid: hasNoDuplicateNumber, error: INVALID_NUMBERS.DUPLICATE },
];

function isValidLength(input) {
  return input.length === GAME_CONSTANTS.ANSWER_LENGTH;
}

function areAllIntegers(input) {
  return input.every((item) => parseFloat(item) === parseInt(item));
}

function hasNoDuplicateNumber(input) {
  return input.length === new Set(input).size;
}

function areAllWithinRange(input) {
  const numbers = input.map(Number);
  return numbers.every(
    (num) =>
      num >= GAME_CONSTANTS.MIN_NUMBER && num <= GAME_CONSTANTS.MAX_NUMBER
  );
}

function isValidCommand(input) {
  const commands = Object.values(USER_COMMANDS);
  return commands.includes(input);
}
