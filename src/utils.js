import { Random } from '@woowacourse/mission-utils';

export const getUniqueNumbersInRange = (start, end, count) => {
  const numbers = [];
  while (numbers.length < count) {
    const number = Random.pickNumberInRange(start, end);
    if (!numbers.includes(number)) numbers.push(number);
  }
  return numbers;
};
