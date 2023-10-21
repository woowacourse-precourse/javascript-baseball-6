class CustomError extends Error {
  constructor(message) {
    super(`[ERROR] ${message}`);
  }
}

const BASEBALL_NUMBER = Object.freeze({
  DIGIT: 3,
  MAX: 9,
  MIN: 1,
});

const ERROR = Object.freeze({
  INVALID_DIGITS: '숫자는 3자리여야 합니다.',
  DUPLICATED_NUMBER: '숫자는 중복되면 안됩니다.',
  OUT_OF_RANGE: '숫자는 1~9 사이여야 합니다.',
});

const MESSAGE = Object.freeze({ ERROR });

export class Client {
  #number;

  constructor(number) {
    this.validateNumber(number);

    this.#number = number;
  }

  validateNumber(number) {
    if (String(number).length === BASEBALL_NUMBER.DIGIT)
      throw new CustomError(MESSAGE.ERROR.INVALID_DIGITS);
  }
}
