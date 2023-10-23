import { MissionUtils } from '@woowacourse/mission-utils';

const BaseBallGame = {
  getRandomArray() {
    const random = [];
    while (random.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!random.includes(number)) {
        random.push(number);
      }
    }
    return random;
  },

  getBallAndStrikeCount(targetArray, number) {
    const count = { ball: 0, strike: 0 };

    const numberArray = [...String(number)].map(Number);
    numberArray.forEach((num, index) => {
      if (targetArray.includes(num)) {
        if (targetArray.indexOf(num) === index) {
          // 포함하면서 위치도 일치 : 스트라이크
          count.strike += 1;
          return;
        }
        // 포함하지만 위치는 불필치 : 볼
        count.ball += 1;
      }
    });
    return count;
  },
};

export default BaseBallGame;
