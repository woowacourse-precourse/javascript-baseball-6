import { ERROR_MESSAGE } from '../constants/error';
import CustomError from '../exceptions/CustomError';
import { isDuplicated } from '../utils/validator';
import { TargetBall } from './TargetBall';

export class TargetBalls {
  #balls;

  static BALL_QUANTITY = 3;

  constructor(numbers) {
    this.#validate(numbers);
    this.#balls = numbers.map(TargetBall.valueOf);
  }

  static of(numbers) {
    return new TargetBalls(numbers);
  }

  get balls() {
    return this.#balls;
  }

  #validate(numbers) {
    if (!Array.isArray(numbers)) {
      throw new CustomError(ERROR_MESSAGE.COMMON.NOT_ARRAY);
    }
    if (numbers.length !== TargetBalls.BALL_QUANTITY) {
      throw new CustomError(ERROR_MESSAGE.TARGET_BALLS.NOT_VALID_QUANTITY);
    }
    if (isDuplicated(numbers)) {
      throw new CustomError(ERROR_MESSAGE.TARGET_BALLS.IS_DUPLICATED);
    }
  }
}
