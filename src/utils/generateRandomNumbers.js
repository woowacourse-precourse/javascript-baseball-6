import { Random } from '@woowacourse/mission-utils';
import CONSTANTS from '../constants/constants.js';

const generateRandomNumbers = length => {
  const randomNumbers = [];
  while (randomNumbers.length < length) {
    const number = Random.pickNumberInRange(CONSTANTS.range.from, CONSTANTS.range.to);
    if (!randomNumbers.includes(number)) randomNumbers.push(number);
  }
  return randomNumbers;
};

export default generateRandomNumbers;
