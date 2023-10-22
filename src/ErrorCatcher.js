import {
  ANSWER_LENGTH,
  START_ORDER,
  QUIT_ORDER,
} from './constants/constants.js';

const ERROR_MESSAGE = Object.freeze({
  NO_NUMBER: '[ERROR] 숫자가 아닌 값은 입력할 수 없습니다.',
  NO_INTEGER: '[ERROR] 정수가 아닌 숫자를 입력할 수 없습니다.',
  INVALID_LENGTH: '[ERROR] 3자리 숫자를 입력해야 합니다.',
  NO_UNIQUE: '[ERROR] 서로 다른 숫자를 입력해야 합니다.',
  INVALID_ORDER: '[ERROR] 1 또는 2 중 하나만 입력할 수 있습니다.',
});

const ErrorCatcher = {
  validateType(answer) {
    if (Number.isNaN(parseInt(answer))) {
      throw ERROR_MESSAGE.NO_NUMBER;
    }

    if (answer.split('').includes('.')) {
      throw ERROR_MESSAGE.NO_INTEGER;
    }
  },

  validateLength(answer) {
    if (answer.split('').length !== ANSWER_LENGTH) {
      throw ERROR_MESSAGE.INVALID_LENGTH;
    }
  },

  validateUnique(answer) {
    if (new Set(answer.split('')).size !== ANSWER_LENGTH) {
      throw ERROR_MESSAGE.NO_UNIQUE;
    }
  },

  validateOrder(answer) {
    if (answer !== START_ORDER && answer !== QUIT_ORDER) {
      throw ERROR_MESSAGE.INVALID_ORDER;
    }
  },
};

export default ErrorCatcher;
