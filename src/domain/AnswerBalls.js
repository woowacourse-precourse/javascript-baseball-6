import { ERROR_MESSAGE } from '../constants/error.js';
import CustomError from '../exceptions/CustomError.js';
import { TargetBall } from './TargetBall.js';
import { TargetBalls } from './TargetBalls.js';

export class AnswerBalls {
  #targetBalls;

  constructor(numbers) {
    this.#targetBalls = TargetBalls.of(numbers);
  }

  static of(numbers) {
    return new AnswerBalls(numbers);
  }

  getTargetBalls() {
    return this.#targetBalls;
  }

  /**
   * targetBalls에 ball을 포함하였는지 판별합니다.
   * @param {TargetBall} ball
   * @returns {boolean}
   */
  contains(ball) {
    this.#validateContains(ball);
    return this.#targetBalls.getBalls().includes(ball);
  }

  #validateContains(ball) {
    if (!(ball instanceof TargetBall)) {
      throw new CustomError(
        ERROR_MESSAGE.ANSWER_BALLS.INVALID_CONTAINS_ARGS,
        this.constructor.name,
      );
    }
  }

  /**
   * targetBalls의 index에 ball이 존재하는지 판별합니다.
   * @param {TargetBall} ball
   * @param {number} index
   * @returns
   */
  match(ball, index) {
    this.#validateMatch(ball, index);
    return this.#targetBalls.getBalls()[index] === ball;
  }

  #validateMatch(ball, index) {
    if (!(ball instanceof TargetBall)) {
      throw new CustomError(
        ERROR_MESSAGE.ANSWER_BALLS.INVALID_MATCH_BALL_ARG,
        this.constructor.name,
      );
    }

    if (typeof index !== 'number' || index < 0) {
      throw new CustomError(
        ERROR_MESSAGE.ANSWER_BALLS.INVALID_MATCH_INDEX_ARG,
        this.constructor.name,
      );
    }
  }
}
