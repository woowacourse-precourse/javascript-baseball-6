import { UPPER_BOUND, LOWER_BOUND } from '../constants/index.js';

export function validateIsArray(arr) {
  if (!Array.isArray(arr)) throw new Error('입력값이 배열이 아닙니다.');
}

export function validateEqualLengthArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) throw new Error('배열의 길이가 다릅니다.');
}

export function validateStrikeTableObject(obj) {
  if (
    typeof obj !== 'object' ||
    !obj.hasOwnProperty('strike') ||
    !obj.hasOwnProperty('ball')
  )
    throw new Error('obj의 형식이 잘못되었습니다.');
}

export function validateMenuInput(input) {
  if (input !== '1' && input !== '2')
    throw new Error('입력값은 1 또는 2이어야 합니다.');
}

export function validateNumber(num) {
  if (typeof num !== 'number') throw new Error('인자는 숫자이어야 합니다.');
}

export function validateThreeDigit(num) {
  if (num > UPPER_BOUND || num < LOWER_BOUND)
    throw new Error('입력된 숫자는 세자리이어야 합니다.');
}

export function validateUniqueArr(arr) {
  validateIsArray(arr);

  if (arr.length !== new Set(arr).size)
    throw new Error('배열의 요소들은 고유해야 합니다.');
}
