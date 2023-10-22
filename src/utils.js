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

async function assessResult(answerDigits, guessDigits) {
  let strike = 0;
  let ball = 0;
  let result = '';

  // 스트라이크를 구한다.
  let strikeIndexes = [];
  for (let i = 0; i < 3; i++) {
    // 스트라이크면 스트라이크 카운트 하나 증가시킨다.
    if (answerDigits[i] === guessDigits[i]) {
      strike++;
      strikeIndexes.push(i);
    }
  }

  // 볼을 구한다.
  let clonedanswerDigits = [];
  let clonedguessDigits = [];
  for (let i = 0; i < 3; i++) {
    if (!strikeIndexes.includes(i)) {
      clonedanswerDigits.push(answerDigits[i]);
      clonedguessDigits.push(guessDigits[i]);
    }
  }

  for (let i = 0; i < 3; i++) {
    if (clonedanswerDigits.includes(clonedguessDigits[i])) {
      ball++;
    }
  }

  // 결과를 출력한다.
  if (ball > 0) {
    result += `${ball}볼`;
  }
  if (ball > 0 && strike > 0) {
    result += ' ';
  }
  if (strike > 0) {
    result += `${strike}스트라이크`;
  }
  if (ball === 0 && strike === 0) {
    result += '낫싱';
  }
  Console.print(result);
  return { strike, ball, result };
}
