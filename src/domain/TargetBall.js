import { isOutOfRange } from '../utils/validator';

import { ERROR_MESSAGE } from '../constants/error';

import CustomError from '../exceptions/CustomError';

export class TargetBall {
  #number;

  constructor(number) {
    this.#number = number;
  }

  static MIN = 1;

  static MAX = 9;

  static #TARGET_NUMBERS = Object.fromEntries(
    Array.from({ length: TargetBall.MAX }, (_, i) => [i + 1, new TargetBall(i + 1)]),
  );

  static valueOf(number) {
    TargetBall.#validate(number);
    const targetBall = TargetBall.#TARGET_NUMBERS[number];
    if (!targetBall) {
      throw new CustomError(ERROR_MESSAGE.common.undefinedInstance);
    }
    return targetBall;
  }

  static #validate(number) {
    if (typeof number !== 'number') {
      throw new CustomError(ERROR_MESSAGE.common.notNumber);
    }
    if (!Number.isInteger(number)) {
      throw new CustomError(ERROR_MESSAGE.common.notInteger);
    }
    if (isOutOfRange(number, TargetBall.MIN, TargetBall.MAX)) {
      throw new CustomError(ERROR_MESSAGE.common.outOfRange(TargetBall.MIN, TargetBall.MAX));
    }
  }

  getNumber() {
    return this.#number;
  }
}
