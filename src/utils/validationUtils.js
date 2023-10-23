import { GAME_CONSTANTS, USER_COMMANDS } from "./constants.js";

const ERROR_MESSAGES = {
  INVALID_NUMBERS: {
    LENGTH: `[ERROR] 입력값은 ${GAME_CONSTANTS.ANSWER_LENGTH}개의 숫자여야 합니다.`,
    DUPLICATE: `[ERROR] 입력값에 중복된 숫자가 있습니다.`,
    INTEGER: `[ERROR] 입력값은 숫자만 허용됩니다.`,
    RANGE: `입력값은 ${GAME_CONSTANTS.MIN_NUMBER} ~ ${GAME_CONSTANTS.MAX_NUMBER} 범위 내의 숫자여야 합니다.`,
  },
  INVALID_COMMAND: `[ERROR] 명령어는 ${USER_COMMANDS.RESTART}이나 ${USER_COMMANDS.QUIT}만 입력할 수 있습니다.`,
};
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
