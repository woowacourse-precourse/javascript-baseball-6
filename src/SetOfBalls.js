import { Random, Console } from '@woowacourse/mission-utils'
import Messages from './Messages.js'

class SetOfBalls {
  balls;

  constructor(ballOne, ballTwo, ballThree) {
    this.balls = ballOne, ballTwo, ballThree;
    Object.freeze(this);
  }

  static create() {
    const numbers = Random.pickUniqueNumbersInRange(1, 9, 3);
    return new SetOfBalls(numbers);
  }

  // todo: check if there are more cases to throw error
  static checkNumbers(input) {
    if (input.length !== 3) throw new Error(Messages.ERROR_INPUT);

    const components = input.split('').map(Number);
    if (components.some((components) => isNaN(components))) throw new Error(Messages.ERROR_INPUT);

    return (new SetOfBalls(components));
  }
}

export default SetOfBalls;
