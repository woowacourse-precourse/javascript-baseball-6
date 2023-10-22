import { MissionUtils } from '@woowacourse/mission-utils';

import { ANSWER_LENGTH } from '../constants/constants.js';

const MIN_NUM = Object.freeze(1);
const MAX_NUM = Object.freeze(9);

class RandomNumbersCreator {
  createRandomNumbers() {
    const numbers = [];
    while (numbers.length < ANSWER_LENGTH) {
      const number = MissionUtils.Random.pickNumberInRange(MIN_NUM, MAX_NUM);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }

    return numbers.join('');
  }
}

export default RandomNumbersCreator;
