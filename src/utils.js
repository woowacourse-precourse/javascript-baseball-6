import { Random } from '@woowacourse/mission-utils';

export function generateRandomThreeDigits() {
  const answerDigits = [];
  while (answerDigits.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    answerDigits.push(number);
  }
  return answerDigits;
}
