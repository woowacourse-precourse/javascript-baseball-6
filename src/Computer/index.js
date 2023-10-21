import { MissionUtils } from '@woowacourse/mission-utils';
import { NUMS } from '../constants/index.js';

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
    return nums;
  }

  isEnd(scores) {
    const [strike, _] = scores;
    return strike === NUMS.ASNWER_LENGTH;
  }

  makeMatchString(scores) {
    const [strike, ball] = scores;
    const strikeString = strike ? `${strike}스트라이크` : '';
    const ballString = ball ? `${ball}볼 ` : '';

    if (!strike && !ball) {
      return '낫싱';
    }
    return `${ballString}${strikeString}`.trim();
  }

  match(input) {
    const { nums } = this;
    const scores = [...input].map(Number).reduce(
      ([strike, ball], num, pos) => {
        if (!nums.includes(num)) {
          return [strike, ball];
        }
        return num === nums[pos] ? [strike + 1, ball] : [strike, ball + 1];
      },
      [0, 0]
    );
    return {
      matchString: this.makeMatchString(scores),
      isEnd: this.isEnd(scores),
    };
  }
}

export default Computer;
