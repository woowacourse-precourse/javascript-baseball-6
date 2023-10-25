import InputError from '../errors/input-error';
import { CONSTANTS } from '../constants';

/**
 * 숫자로만 이루어진 배열인지 검사하는 함수
 * @param {number[]} numbers
 * @returns {boolean}
 */
export const isSafeInteger = (numbers) => Number.isSafeInteger(Number(numbers.join('')));

/**
 * 범위 내의 숫자로만 이루어진 배열인지 검사하는 함수
 * @param {number[]} numbers
 * @returns {boolean}
 */
export const isInRange = (numbers) => numbers.every(
  (number) => CONSTANTS.RANGE.from <= number && number <= CONSTANTS.RANGE.to,
);

/**
 * 3자리 숫자로만 이루어진 배열인지 검사하는 함수
 * @param {number[]} numbers
 * @returns {boolean}
 */
export const isThreeWord = (numbers) => numbers.length === CONSTANTS.MAX_INPUT_SIZE;

/**
 * 중복되지 않는 숫자로만 이루어진 배열인지 검사하는 함수
 * @param {numbers[]} numbers
 * @returns {boolean}
 */
export const isUnique = (numbers) => new Set(numbers).size === numbers.length;

/**
 * 입력값을 검사하는 함수
 * @param {number[]} numbers
 */
export default function validate(numbers) {
  if (!isSafeInteger(numbers)) {
    throw new InputError('숫자를 입력해주세요.');
  }
  if (!isInRange(numbers)) {
    throw new InputError(
      `${CONSTANTS.RANGE.from}~${CONSTANTS.RANGE.to} 사이의 숫자를 입력해주세요.`,
    );
  }
  if (!isThreeWord(numbers)) {
    throw new InputError(`${CONSTANTS.MAX_INPUT_SIZE}자리 숫자를 입력해주세요.`);
  }
  if (!isUnique(numbers)) {
    throw new InputError('중복되지 않는 숫자를 입력해주세요.');
  }
}
