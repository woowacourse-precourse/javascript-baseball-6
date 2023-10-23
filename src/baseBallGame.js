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
};

export default BaseBallGame;
