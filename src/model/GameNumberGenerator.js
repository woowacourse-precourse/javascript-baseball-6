import { Random } from '@woowacourse/mission-utils';
import { SYSTEM } from '../constants/System.js';

/**
 * 랜덤한 서로 다른 3자리의 수를 생성하는 함수
 * @returns {number[]} 서로 다른 3자리수가 들어있는 배열
 */
const GameNumberGenerator = () => {
  const numbers = new Set();
  while (numbers.size < SYSTEM.GAME_NUMBER_COUNT) {
    const randomNumber = Random.pickNumberInRange(
      SYSTEM.GAME_NUMBER_RANGE_START,
      SYSTEM.GAME_NUMBER_RANGE_END,
    );
    numbers.add(randomNumber);
  }

  return [...numbers];
};

export default GameNumberGenerator;
