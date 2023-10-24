import InputError from '../errors/input-error';
import CONSTANTS from '../assets/constants';

const isAllNumber = (numbers) => !numbers.some(Number.isNaN);
const isInRange = (numbers) => numbers.every(
  (number) => CONSTANTS.RANGE.from <= number && number <= CONSTANTS.RANGE.to,
);
const isThreeWordLong = (numbers) => numbers.length === 3;
const isUnique = (numbers) => new Set(numbers).size === numbers.length;

export default function validate(numbers) {
  if (!isAllNumber(numbers)) {
    throw new InputError('숫자를 입력해주세요.');
  }
  if (!isInRange(numbers)) {
    throw new InputError(
      `${CONSTANTS.RANGE.from}~${CONSTANTS.RANGE.to} 사이의 숫자를 입력해주세요.`,
    );
  }
  if (!isThreeWordLong(numbers)) {
    throw new InputError('3자리 숫자를 입력해주세요.');
  }
  if (!isUnique(numbers)) {
    throw new InputError('중복되지 않는 숫자를 입력해주세요.');
  }
}
