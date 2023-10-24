import { CONTINUE, LENGTH_OF_ANSWER, EXIT } from './Constants.js';

const ERROR_INVALID_INPUT = '[ERROR] 입력 값이 올바르지 않습니다.';

function isLengthInvalid(input) {
  return input.length !== LENGTH_OF_ANSWER;
}

function isIncludeInvalidCharacter(input) {
  const pattern = /^[1-9]+$/;
  return pattern.test(input) === false;
}

function isDuplicated(input) {
  return new Set(input).size !== input.length;
}

export function validateGuessedNumber(input) {
  if (isLengthInvalid(input)) {
    throw Error(ERROR_INVALID_INPUT);
  }
  if (isIncludeInvalidCharacter(input)) {
    throw Error(ERROR_INVALID_INPUT);
  }
  if (isDuplicated(input)) {
    throw Error(ERROR_INVALID_INPUT);
  }
}

export function validatePlayAgain(input) {
  if (input !== CONTINUE && input !== EXIT) {
    throw Error(ERROR_INVALID_INPUT);
  }
}
