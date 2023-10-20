import { RANGE } from './constants.js';

const isThreeWordLong = (numbers) => numbers.length === 3;
const isUnique = (numbers) => new Set(numbers).size === numbers.length;
const isInRange = (numbers) =>
  numbers.every((number) => RANGE.from <= number && number <= RANGE.to);
const isAllNumber = (numbers) =>
  numbers.every((number) => !Number.isNaN(number));

export function validate(numbers) {
  if (!isThreeWordLong(numbers)) {
    throw new Error('[ERROR] 3자리 숫자를 입력해주세요.');
  }
  if (!isUnique(numbers)) {
    throw new Error('[ERROR] 중복되지 않는 숫자를 입력해주세요.');
  }
  if (!isInRange(numbers)) {
    throw new Error(
      `[ERROR] ${RANGE.from}~${RANGE.to} 사이의 숫자를 입력해주세요.`
    );
  }
  if (!isAllNumber(numbers)) {
    throw new Error('[ERROR] 숫자를 입력해주세요.');
  }
}
