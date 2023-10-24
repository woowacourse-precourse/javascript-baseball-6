import { GAME_CONSTANTS, USER_COMMANDS } from './constants.js';

const ERROR_MESSAGES = {
  invalidNumbers: {
    length: `[ERROR] 입력값은 ${GAME_CONSTANTS.answerLength}개의 숫자여야 합니다.`,
    duplicate: `[ERROR] 입력값에 중복된 숫자가 있습니다.`,
    integer: `[ERROR] 입력값은 숫자만 허용됩니다.`,
    range: `입력값은 ${GAME_CONSTANTS.minNumber} ~ ${GAME_CONSTANTS.maxNumber} 범위 내의 숫자여야 합니다.`,
  },
  invalidCommand: `[ERROR] 명령어는 ${USER_COMMANDS.restart}이나 ${USER_COMMANDS.quit}만 입력할 수 있습니다.`,
};
const { invalidNumbers, invalidCommand } = ERROR_MESSAGES;

export const validationUtils = {
  validateNumbers(input) {
    const numbers = input.split('');
    for (const validation of validations) {
      if (!validation.isValid(numbers)) {
        throw new Error(validation.error);
      }
    }
  },
  validateCommand(command) {
    if (!isValidCommand(command)) {
      throw new Error(invalidCommand);
    }
  },
};

const validations = [
  { isValid: isValidLength, error: invalidNumbers.length },
  { isValid: areAllIntegers, error: invalidNumbers.integer },
  { isValid: areAllWithinRange, error: invalidNumbers.range },
  { isValid: hasNoDuplicateNumber, error: invalidNumbers.duplicate },
];

function isValidLength(input) {
  return input.length === GAME_CONSTANTS.answerLength;
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
    (num) => num >= GAME_CONSTANTS.minNumber && num <= GAME_CONSTANTS.maxNumber
  );
}

function isValidCommand(input) {
  const commands = Object.values(USER_COMMANDS);
  return commands.includes(input);
}
