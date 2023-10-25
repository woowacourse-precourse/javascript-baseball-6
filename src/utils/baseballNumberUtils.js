import { MissionUtils } from '@woowacourse/mission-utils';
import { BASEBALL_NUMBER, NUMBER } from '../constants/baseballNumber.js';

export const generateAnswer = () => {
  const numberSet = new Set();

  while (numberSet.size < BASEBALL_NUMBER.DIGIT) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(
      BASEBALL_NUMBER.MIN,
      BASEBALL_NUMBER.MAX
    );

    numberSet.add(randomNumber);
  }

  return [...numberSet];
};

export const isBaseballNumber = (numberString) => {
  const number = parseInt(numberString, NUMBER.RADIX);

  return number <= BASEBALL_NUMBER.MAX && number >= BASEBALL_NUMBER.MIN;
};
