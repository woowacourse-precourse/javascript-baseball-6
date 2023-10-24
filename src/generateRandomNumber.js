import { Random } from '@woowacourse/mission-utils';

import { ANSWER } from './constants/constants';

function generateRandomNumber() {
  const computerNums = new Set();

  while (computerNums.size < ANSWER.LENGTH) {
    const randomNumber = Random.pickNumberInRange(ANSWER.MIN, ANSWER.MAX);
    computerNums.add(randomNumber);
  }
  return Array.from(computerNums);
}

export { generateRandomNumber };
