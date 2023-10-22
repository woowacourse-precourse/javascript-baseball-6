import { MissionUtils } from '@woowacourse/mission-utils';

//computer random ball
export const MakeRandomNumber = () => {
  const RANDOM_NUMBER_ARRAY = [];
  while (RANDOM_NUMBER_ARRAY.length < 3) {
    const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!RANDOM_NUMBER_ARRAY.includes(NUMBER)) {
      RANDOM_NUMBER_ARRAY.push(NUMBER);
    }
  }
  return RANDOM_NUMBER_ARRAY;
};

export const isValidUserNumber = (input) => {
  if (input.length !== 3) return false;
  if (new Set(input).size !== 3) return false;
  if (input.includes(0)) return false;
  if (Number.isNaN(Number(input))) return false;
  return true;
};
