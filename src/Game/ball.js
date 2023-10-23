import { MissionUtils } from '@woowacourse/mission-utils';
import { ANSWER } from '../Constants/constant.js';

export const makeRandomNumber = () => {
  const RANDOM_NUMBER_ARRAY = [];
  while (RANDOM_NUMBER_ARRAY.length < ANSWER.LENGTH) {
    const NUMBER = MissionUtils.Random.pickNumberInRange(ANSWER.MIN, ANSWER.MAX);
    if (!RANDOM_NUMBER_ARRAY.includes(NUMBER)) {
      RANDOM_NUMBER_ARRAY.push(NUMBER);
    }
  }
  return RANDOM_NUMBER_ARRAY;
};

export const isValidUserNumber = (input) => {
  if (input.length !== ANSWER.LENGTH) return false;
  if (new Set(input).size !== ANSWER.LENGTH) return false;
  if (input.includes(0)) return false;
  if (Number.isNaN(Number(input))) return false;
  return true;
};
