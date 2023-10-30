import { MissionUtils } from '@woowacourse/mission-utils';
import { MIN_NUM, MAX_NUM, NUM_OF_BALLS } from '../constants/index.js';

export function generateThreeNumber() {
  const computer = [];
  while (computer.length < NUM_OF_BALLS) {
    const number = MissionUtils.Random.pickNumberInRange(MIN_NUM, MAX_NUM);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }

  return computer;
}
