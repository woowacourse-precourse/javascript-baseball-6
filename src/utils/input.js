import { Console } from '@woowacourse/mission-utils';
import {
  validateMenuInput,
  validateNumber,
  validateString,
  validateThreeDigit,
  validateUniqueArr,
} from './validation.js';

export async function getInput() {
  return await Console.readLineAsync('숫자를 입력해주세요 : ');
}

export async function getMenuInput() {
  const input = await Console.readLineAsync(
    '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
  );
  validateMenuInput(input);

  return input;
}

export function parseNumber(str) {
  validateString(str);
  const parseNumber = Number(str);
  validateNumber(parseNumber);

  return parseNumber;
}

export function storeThreeNumberToArr(num) {
  validateNumber(num);
  validateThreeDigit(num);

  return String(num).split('').map(Number);
}

export async function getNumber() {
  const input = await getInput();

  const parsedNum = parseNumber(input);
  const inputArr = storeThreeNumberToArr(parsedNum);
  validateUniqueArr(inputArr);

  return [...inputArr];
}
