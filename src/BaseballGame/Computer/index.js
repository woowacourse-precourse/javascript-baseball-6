import { MissionUtils } from '@woowacourse/mission-utils';
import { NUMS, MATCH } from '../constants/index.js';

class Computer {
  constructor() {
    this.nums = [];
  }

  generate() {
    const { nums } = this;
    while (nums.length < NUMS.ASNWER_LENGTH) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!nums.includes(number)) {
        nums.push(number);
      }
    }
  }

  isMatch({ strike }) {
    return strike === NUMS.ASNWER_LENGTH;
  }

  makeMatchString({ strike, ball }) {
    const strikeString = strike ? `${strike}${MATCH.STRIKE}` : '';
    const ballString = ball ? `${ball}${MATCH.BALL}` : '';

    if (!strike && !ball) {
      return MATCH.NOTHING;
    }
    return `${ballString} ${strikeString}`.trim();
  }

  match(input) {
    const { nums } = this;
    const scores = [...input].map(Number).reduce(
      ({ strike, ball }, num, pos) => {
        if (!nums.includes(num)) {
          return { strike, ball };
        }
        return num === nums[pos]
          ? { strike: strike + 1, ball }
          : { strike, ball: ball + 1 };
      },
      { strike: 0, ball: 0 }
    );
    return {
      matchString: this.makeMatchString(scores),
      isMatch: this.isMatch(scores),
    };
  }
}

export default Computer;
