import { TargetBall } from './TargetBall';

export class TargetBalls {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers.map(TargetBall.valueOf);
  }

  static of(numbers) {
    return new TargetBalls(numbers);
  }

  get numbers() {
    return this.#numbers;
  }
}
