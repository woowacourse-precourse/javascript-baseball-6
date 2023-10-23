import { Random, Console } from '@woowacourse/mission-utils'

class SetOfBalls {
  balls;

  constructor(ballOne, ballTwo, ballThree) {
    this.balls = ballOne, ballTwo, ballThree;
    Object.freeze(this);
  }

  static create() {
    const ballOne = Random.pickNumberInRange(1, 9);
    const ballTwo = Random.pickNumberInRange(1, 9);
    const ballThree = Random.pickNumberInRange(1, 9);
    return new SetOfBalls([ballOne, ballTwo, ballThree]);
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
