import { Random } from '@woowacourse/mission-utils';
import { RANDOM_NUMBERS } from '../constants/randomNumbers.js';
import { paramType } from './paramType.js';

export const createRandomNumbers = (length, _ = paramType(length, Number)) => {
  const result = [];
  while (result.length < length) {
    const randomNumber = Random.pickNumberInRange(
      RANDOM_NUMBERS.RANGE.MIN,
      RANDOM_NUMBERS.RANGE.MAX
    );
    if (!result.includes(randomNumber)) result.push(randomNumber);
  }
  const winningNumbers = Number(result.join(''));

  return winningNumbers;
};
