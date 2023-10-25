import { Random } from '@woowacourse/mission-utils';

export const getUniqueNumbersInRange = async (start, end, count) => {
  const numbers = [];
  while (numbers.length < count) {
    const number = await Random.pickNumberInRange(start, end);
    if (!numbers.includes(number)) numbers.push(number);
  }
  return numbers;
};
