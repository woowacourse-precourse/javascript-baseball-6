import { Random } from '@woowacourse/mission-utils';

export function generateRandomThreeDigits() {
  const answerDigits = [];
  while (answerDigits.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    answerDigits.push(number);
  }
  return answerDigits;
}

async function readGuessDigits() {
  const guess = await Console.readLineAsync('숫자를 입력해주세요 : ');
  const guessDigits = guess
    .split('')
    .map((numberString) => parseInt(numberString));
  if (guess.length !== 3) {
    throw new Error('[ERROR] 세 자리 수가 아닙니다.');
  }
  return guessDigits;
}
