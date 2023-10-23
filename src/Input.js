import { Random } from '@woowacourse/mission-utils';

const GENERATE_RANDOM_NUMBER = () => Random.pickNumberInRange(1, 9);

export const CREATE_RANDOM_NUMBER = () => {
  const NUMBERS = new Set();

  while (NUMBERS.size < 3) {
    NUMBERS.add(GENERATE_RANDOM_NUMBER);
  }

  return [...NUMBERS];
};
