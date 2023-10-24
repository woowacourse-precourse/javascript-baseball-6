import { ERROR_MESSAGE } from '../constants/error.js';
import CustomError from '../exceptions/CustomError.js';
import { isDuplicated } from '../utils/validator.js';
import { TargetBall } from './TargetBall.js';

export class TargetBalls {
  #balls;

  constructor(numbers) {
    this.#validate(numbers);
    this.#balls = numbers.map(TargetBall.valueOf);
  }

  static BALL_QUANTITY = 3;

  static of(numbers) {
    return new TargetBalls(numbers);
  }

  getBalls() {
    return this.#balls;
  }

  #validate(numbers) {
    if (!Array.isArray(numbers)) {
      throw new CustomError(ERROR_MESSAGE.common.notArray);
    }
    if (numbers.length !== TargetBalls.BALL_QUANTITY) {
      throw new CustomError(ERROR_MESSAGE.targetBalls.invalidQuantity(TargetBalls.BALL_QUANTITY));
    }
    if (isDuplicated(numbers)) {
      throw new CustomError(ERROR_MESSAGE.targetBalls.isDuplicated);
    }
  }
}
