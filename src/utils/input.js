import { Console } from '@woowacourse/mission-utils';
import { UPPER_BOUND, LOWER_BOUND } from '../constants/index.js';

export async function getInput() {
  return await Console.readLineAsync('숫자를 입력해주세요 : ');
}

export async function getMenuInput() {
  const input = await Console.readLineAsync(
    '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
  );

  vaidateMenuInput(input);

  return input;
}

export function validateUniqueArr(arr) {
  if (!Array.isArray(arr)) throw new Error('인자는 배열이어야 합니다.');

  if (arr.length !== new Set(arr).size)
    throw new Error('배열의 요소들은 고유해야 합니다.');
}

export function parseNumber(str) {
  if (typeof str !== ('string' || 'number'))
    throw new Error('인자는 문자열이나 숫자이어야 합니다.');

  const parseNumber = Number(str);

  if (isNaN(parseNumber)) throw new Error('입력값은 숫자여야합니다.');

  return parseNumber;
}

export function storeThreeNumberToArr(num) {
  if (typeof num !== 'number') throw new Error('인자는 숫자이어야 합니다.');

  if (num > UPPER_BOUND || num < LOWER_BOUND)
    throw new Error('입력된 숫자는 세자리이어야 합니다.');

  return String(num).split('').map(Number);
}

export async function getNumber() {
  const input = await getInput();

  const parsedNum = parseNumber(input);
  const inputArr = storeThreeNumberToArr(parsedNum);

  validateUniqueArr(inputArr);

  return [...inputArr];
}

export function vaidateMenuInput(input) {
  if (input !== '1' && input !== '2')
    throw new Error('입력값은 1 또는 2이어야 합니다.');
}
