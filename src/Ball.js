import { Random } from '@woowacourse/mission-utils';

/**
 * Set을 이용하여 겹치지 않는 랜덤한 3개의 공 숫자 생성
 * @returns {[number]} 3자리 숫자 배열
 */

export const generateRandomBallNumber = () => {
  let number = new Set();
  while (number.size !== 3) {
    number.add(Random.pickNumberInRange(1, 9));
  }
  return [...number];
};