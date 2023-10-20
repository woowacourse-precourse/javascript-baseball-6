import { ANSWER_LENGTH } from './constants/constants.js';

const ERROR_MESSAGE = Object.freeze({
  NO_NUMBER: '[ERROR] 숫자가 아닌 값은 입력할 수 없습니다.',
  NO_INTEGER: '[ERROR] 정수가 아닌 숫자를 입력할 수 없습니다.',
  INVALID_LENGTH: '[ERROR] 3자리 숫자를 입력해야 합니다.',
  NO_UNIQUE: '[ERROR] 서로 다른 숫자를 입력해야 합니다.',
});

const ErrorCatcher = {
  validateType(answer) {
    if (Number.isNaN(parseInt(answer))) {
      throw new Error(ERROR_MESSAGE.NO_NUMBER);
    }

    if (answer.split('').includes('.')) {
      throw new Error(ERROR_MESSAGE.NO_INTEGER);
    }
  },

  validateLength(answer) {
    if (answer.split('').length !== ANSWER_LENGTH) {
      throw new Error(ERROR_MESSAGE.INVALID_LENGTH);
    }
  },

  validateUnique(answer) {
    if (new Set(answer.split('')).size !== ANSWER_LENGTH) {
      throw new Error(ERROR_MESSAGE.NO_UNIQUE);
    }
  },
};

export default ErrorCatcher;
