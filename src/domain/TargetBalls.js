import { TargetBall } from './TargetBall';

export class TargetBalls {
  #balls;

  constructor(numbers) {
    this.#balls = numbers.map(TargetBall.valueOf);
  }

  static of(numbers) {
    return new TargetBalls(numbers);
  }

  get balls() {
    return this.#balls;
  }
}
