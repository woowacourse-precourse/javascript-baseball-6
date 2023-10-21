import { Random } from '@woowacourse/mission-utils';

export default function generateNumber(min, max) {
  const numbers = new Set();
  while (numbers.size < 3) {
    const number = Random.pickNumberInRange(min, max);
    numbers.add(number);
  }
  return [...numbers];
}
