import { ERROR_MESSAGE } from '../../constants/Messages.js';
import ValidationError from '../error/ValidationError.js';

/**
 * input 값이 문자라면 에러 발생
 * @param {string} inputNumber
 */
export const checkString = (inputNumber) => {
  if (Number.isNaN(Number(inputNumber))) {
    throw new ValidationError(ERROR_MESSAGE.STRING);
  }
};

/**
 * input 값에 0이 포함되면 에러 발생
 * @param {string} inputNumber
 */
export const checkZero = (inputNumber) => {
  if (inputNumber.match(/0+/g)) {
    throw new ValidationError(ERROR_MESSAGE.ZERO);
  }
};

/**
 * input 값에 중복된 값이 포함되면 에러 발생
 * @param {string} inputNumber
 */
export const checkDuplication = (inputNumber) => {
  const setInputNumber = new Set([...inputNumber]);
  if (inputNumber.length !== setInputNumber.size) {
    throw new ValidationError(ERROR_MESSAGE.DUPLICATION);
  }
};

/**
 * input 값이 3자리 숫자가 아니면 에러 발생
 * @param {string} inputNumber
 */
export const checkThreeDigitNumber = (inputNumber) => {
  if (inputNumber.length !== 3) {
    throw new ValidationError(ERROR_MESSAGE.THREE_DIGIT);
  }
};

/**
 *  input 값이 1 또는 2가 아니면 에러 발생
 * @param {string} inputNumber
 */
export const checkOnlyOneOrTwo = (inputNumber) => {
  if (inputNumber !== '1' && inputNumber !== '2') {
    throw new ValidationError(ERROR_MESSAGE.ONLY_ONE_OR_TWO);
  }
};
