import { MissionUtils } from '@woowacourse/mission-utils';
import { GAME_RANGE } from '../contants.js';

function generateRandomNumbers() {
  const numbers = [];

  while (numbers.length < GAME_RANGE.MAX_SIZE) {
    const number = MissionUtils.Random.pickNumberInRange(
      GAME_RANGE.MINIMUN_VALUE,
      GAME_RANGE.MAXIMUM_VALUE,
    );

    if (!numbers.includes(number)) {
      numbers.push(number);
    }
  }
  return numbers;
}

export default generateRandomNumbers;
