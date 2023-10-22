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

  static checkNumbers(input) {
    if (/^[1-9]{3}$/.test(input) && new Set(input).size === 3) {
      return true;
    } else {
      return false;
    }
  }
}

export default SetOfBalls;
