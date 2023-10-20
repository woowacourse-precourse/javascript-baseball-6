import { MissionUtils } from '@woowacourse/mission-utils';

import { ANSWER_LENGTH } from '../constants/constants.js';

const MIN_NUM = Object.freeze(1);
const MAX_NUM = Object.freeze(9);

class RandomNumbersMaker {
  makeNumbers() {
    const computer = [];
    while (computer.length < ANSWER_LENGTH) {
      const number = MissionUtils.Random.pickNumberInRange(MIN_NUM, MAX_NUM);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    return computer.join('');
  }
}

export default RandomNumbersMaker;
