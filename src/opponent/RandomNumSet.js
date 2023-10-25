import { Random } from '@woowacourse/mission-utils';
import { SETTINGS } from '../../constants/index.js';

/**
 * 👾 Opponent-1: 1에서 9까지 서로 다른 임의의 수 3개를 선택한다.
 * @returns {number[]}
 */
class RandomNumSet {
  getRandomNumSet() {
    const answer = [];

    while (answer.length < SETTINGS.numberOfRandom) {
      const number = Random.pickNumberInRange(
        SETTINGS.minRange,
        SETTINGS.maxRange
      );
      if (!answer.includes(number)) answer.push(number);
    }

    return answer;
  }
}

export default RandomNumSet;
