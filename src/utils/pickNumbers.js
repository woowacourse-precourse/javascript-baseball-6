import { Random } from '@woowacourse/mission-utils';
import { SETTING } from '../../constants/index.js';

const pickNumbers = () => {
  const randomNumbers = [];
  while (randomNumbers.length < SETTING.NUMBER_OF_RANDOM) {
    const num = Random.pickNumberInRange(SETTING.MIN_RANGE, SETTING.MAX_RANGE);
    if (!randomNumbers.includes(num)) {
      randomNumbers.push(num);
    }
  }
  return randomNumbers;
};

export default pickNumbers;
