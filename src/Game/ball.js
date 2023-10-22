import { MissionUtils } from '@woowacourse/mission-utils';

//computer random ball
export const MAKE_RANDOM_NUMBER = () => {
  const RANDOM_NUMBER_ARRAY = [];
  while (RANDOM_NUMBER_ARRAY.length < 3) {
    const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!RANDOM_NUMBER_ARRAY.includes(NUMBER)) {
      RANDOM_NUMBER_ARRAY.push(NUMBER);
    }
  }
  return RANDOM_NUMBER_ARRAY;
};
