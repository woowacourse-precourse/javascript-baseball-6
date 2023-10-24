import { Random } from '@woowacourse/mission-utils';

/**
 * 겹치지 않는 랜덤한 3개의 공 숫자 생성
 * @returns {number}
 */

export const generateRandomBallNumber = () => {
  let number = new Set();
  while (number.size !== 3) {
    number.add(Random.pickNumberInRange(1, 9));
  }
  return [...number];
};
