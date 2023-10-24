import {
  ANSWER_LENGTH,
  START_ORDER,
  QUIT_ORDER,
  NOT_IN_RANGE_NUMBER,
} from './constants/constants.js';

const DECIMAL_POINT = Object.freeze('.');
const MINUS = Object.freeze('-');

const ERROR_MESSAGE = Object.freeze({
  NO_NUMBER: '[ERROR] 부호/기호/문자 없이 숫자만 입력해야 합니다.',
  NOT_IN_RANGE: `[ERROR] ${NOT_IN_RANGE_NUMBER}을 제외한 숫자만 입력해야 합니다.`,
  INVALID_LENGTH: `[ERROR] ${ANSWER_LENGTH}개의 숫자를 입력해야 합니다.`,
  NO_UNIQUE: '[ERROR] 서로 다른 숫자를 입력해야 합니다.',
  INVALID_ORDER: `[ERROR] ${START_ORDER} 또는 ${QUIT_ORDER} 중 하나만 입력할 수 있습니다.`,
});

const ErrorCatcher = {
  validateType(answer) {
    if (Number.isNaN(parseInt(answer))) {
      throw ERROR_MESSAGE.NO_NUMBER;
    }

    if (answer.split('').includes(DECIMAL_POINT)) {
      throw ERROR_MESSAGE.NO_NUMBER;
    }

    if (answer.split('').includes(MINUS)) {
      throw ERROR_MESSAGE.NO_NUMBER;
    }
  },

  validateRange(answer) {
    if (answer.split('').includes(NOT_IN_RANGE_NUMBER)) {
      throw ERROR_MESSAGE.NOT_IN_RANGE;
    }
  },

  validateLength(answer) {
    if (String(parseInt(answer)).length !== ANSWER_LENGTH) {
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
