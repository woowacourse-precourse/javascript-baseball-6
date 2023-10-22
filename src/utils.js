import { Console, Random } from '@woowacourse/mission-utils';

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

export async function getUserRestartChoice() {
  const userInput = await Console.readLineAsync(
    '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
  );
  if (userInput != 1 && userInput != 2) {
    throw new Error(
      '[ERROR] 재시작여부: 1(재시작)과 2(종료) 중 하나를 입력하셔야합니다.'
    );
  }
  let shouldRestart = false;
  if (userInput == 1) {
    shouldRestart = true;
  }

  return shouldRestart ? 'RESTART' : 'END';
}

export async function guessDigitsUntilCorrect(answerDigits) {
  let isCorrect = false;
  while (!isCorrect) {
    const guessDigits = await readGuessDigits();
    const { strike } = await assessResult(answerDigits, guessDigits);

    // 정답이면 숫자입력을 그만 받는다.
    if (strike === 3) {
      isCorrect = true;
    }
  }
  Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
}
