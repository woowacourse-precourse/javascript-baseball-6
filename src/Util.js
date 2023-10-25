import { Random } from '@woowacourse/mission-utils';

class GameUtil {
  generateRandomNumber() {
    const RANDOM_NUMBER = [];
    while (RANDOM_NUMBER.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!RANDOM_NUMBER.includes(number)) {
        RANDOM_NUMBER.push(number);
      }
    }
    return RANDOM_NUMBER.join('');
  }
}

export default GameUtil;
