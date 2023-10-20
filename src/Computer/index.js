import { MissionUtils } from '@woowacourse/mission-utils';

class Computer {
  constructor() {
    this.nums = [];
  }

  generateRandomNumber() {
    const { nums } = this;
    while (nums.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!nums.includes(number)) {
        nums.push(number);
      }
    }
    return this.nums;
  }

  isEnd(scores) {
    const [strike, _] = scores;
    return strike === 3;
  }

  makeMatchString(scores) {
    const [strike, ball] = scores;
    const strikeString = strike && `${strike}스트라이크`;
    const ballString = ball && `${ball}볼 `;

    if (!strike && !ball) {
      return '낫싱';
    }
    return `${ballString}${strikeString}`.trim();
  }

  match(input) {
    const inputNums = [...input].map(Number);
    const { nums } = this;
    const scores = inputNums.reduce(
      ([strike, ball], num, index) => {
        if (nums.includes(num) && num === nums[index]) {
          return [strike + 1, ball];
        }
        if (nums.includes(num)) {
          return [strike, ball + 1];
        }
        return [strike, ball];
      },
      [0, 0]
    );
    const matchString = this.makeMatchString(scores);
    const isEnd = this.isEnd(scores);
    return { matchString, isEnd };
  }
}

export default Computer;
