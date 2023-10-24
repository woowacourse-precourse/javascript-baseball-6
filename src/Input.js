import { Random } from '@woowacourse/mission-utils';

export const CREATE_RANDOM_NUMBER = () => {
  const NUMBERS = new Set();

  while (NUMBERS.size < 3) {
    NUMBERS.add(Random.pickNumberInRange(1, 9));
  }

  return [...NUMBERS];
};
