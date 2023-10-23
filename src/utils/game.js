import { NUM_OF_BALLS } from '../constants/index.js';
import {
  validateIsArray,
  validateEqualLengthArrays,
  validateStrikeTableObject,
} from './validation.js';

export function compare(arr1, arr2) {
  validateIsArray(arr1);
  validateIsArray(arr2);
  validateEqualLengthArrays(arr1, arr2);

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
  validateStrikeTableObject(result);

  if (result.strike && result.ball)
    return `${result.ball}볼 ${result.strike}스트라이크`;

  if (result.strike) return `${result.strike}스트라이크`;

  if (result.ball) return `${result.ball}볼`;

  return '낫싱';
}
