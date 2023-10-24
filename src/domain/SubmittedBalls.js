import { TargetBalls } from './TargetBalls.js';

export class SubmittedBalls {
  #score = {
    strike: 0,
    ball: 0,
  };

  #targetBalls;

  constructor(numbers) {
    this.#targetBalls = TargetBalls.of(numbers);
  }

  static of(numbers) {
    return new SubmittedBalls(numbers);
  }

  get targetBalls() {
    return this.#targetBalls;
  }

  get score() {
    return this.#score;
  }

  increaseStrike() {
    this.#score.strike += 1;
  }

  increaseBall() {
    this.#score.ball += 1;
  }
}
