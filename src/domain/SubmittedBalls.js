import { TargetBalls } from './TargetBalls';

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

  getTargetBalls() {
    return this.#targetBalls;
  }

  getScore() {
    return this.#score;
  }

  increaseStrike() {
    this.#score.strike += 1;
  }

  increaseBall() {
    this.#score.ball += 1;
  }
}
