import { ERROR_MESSAGE } from '../constants/error.js';
import CustomError from '../exceptions/CustomError.js';
import { isOutOfRange } from '../utils/validator.js';

export class TargetBall {
  #number;

  constructor(number) {
    this.#validate(number);
    this.#number = number;
  }

  static MIN = 1;

  static MAX = 9;

  static #TARGET_NUMBERS = Object.fromEntries(
    Array.from({ length: TargetBall.MAX }, (_, i) => [i + 1, new TargetBall(i + 1)]),
  );

  static valueOf(value) {
    const targetBall = TargetBall.#TARGET_NUMBERS[value];
    return targetBall;
  }

  getNumber() {
    return this.#number;
  }

  #validate(number) {
    if (typeof number !== 'number') {
      throw new CustomError(ERROR_MESSAGE.COMMON.NOT_NUMBER);
    }
    if (!Number.isInteger(number)) {
      throw new CustomError(ERROR_MESSAGE.COMMON.NOT_INTEGER);
    }
    if (isOutOfRange(number, TargetBall.MIN, TargetBall.MAX)) {
      throw new CustomError(
        ERROR_MESSAGE.COMMON.OUT_OF_RANGE(TargetBall.MIN, TargetBall.MAX),
        this.constructor.name,
      );
    }
  }
}
