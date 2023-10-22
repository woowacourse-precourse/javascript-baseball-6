import { TargetBalls } from './TargetBalls';

export class AnswerBalls {
  #targetBalls;

  constructor(numbers) {
    this.#targetBalls = TargetBalls.of(numbers);
  }

  static of(numbers) {
    return new AnswerBalls(numbers);
  }

  get targetBalls() {
    return this.#targetBalls;
  }

  contains(ball) {
    return this.#targetBalls.balls.includes(ball);
  }

  match(ball, index) {
    return this.#targetBalls.balls[index] === ball;
  }
}
