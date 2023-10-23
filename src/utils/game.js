import { NUM_OF_BALLS } from '../constants/index.js';

export function compare(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2))
    throw new Error('입력값이 배열이 아닙니다.');

  if (arr1.length !== arr2.length) throw new Error('배열의 길이가 다릅니다.');

  const strikeTable = Array(NUM_OF_BALLS).fill(false);
  let strike = 0;
  let ball = 0;

  for (let i = 0; i < NUM_OF_BALLS; i++) {
    if (arr1[i] === arr2[i]) strikeTable[i] = true;
  }

  for (let i = 0; i < NUM_OF_BALLS; i++) {
    if (!strikeTable[i]) arr2.includes(arr1[i]) && ball++;
  }

  strike = strikeTable.reduce((acc, isStrike) => (isStrike ? acc + 1 : acc), 0);

  return { strike, ball };
}

export function generateResultString(result) {
  if (
    typeof result !== 'object' ||
    !result.hasOwnProperty('strike') ||
    !result.hasOwnProperty('ball')
  )
    throw new Error('result의 형식이 잘못되었습니다.');

  if (result.strike && result.ball)
    return `${result.ball}볼 ${result.strike}스트라이크`;

  if (result.strike) return `${result.strike}스트라이크`;

  if (result.ball) return `${result.ball}볼`;

  return '낫싱';
}
