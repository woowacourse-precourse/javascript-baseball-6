import { ERROR_MESSAGE } from './Message.js';

const doValidate = (input) => {
  isInputLengthRight(input);
  isInputNumber(input);
  isInputIncludeZero(input);
  isInputDifferentNumber(input);
};

// 입력한 숫자의 자릿수가 세 자리 인지 확인하는 함수
const isInputLengthRight = (input) => {
  if (input.length !== 3) throw new Error(ERROR_MESSAGE.INPUT_THREE_NUMBER);
};

// 입력한 숫자가 모두 숫자인지 확인하는 함수
const isInputNumber = (input) => {
  if (Number.isNaN(input * 1)) {
    throw new Error(ERROR_MESSAGE.INPUT_ONLY_NUMBER);
  }
};

// 입력한 숫자에 0이 포함되는지 확인하는 함수
const isInputIncludeZero = (input) => {
  [...input].forEach((num) => {
    checkIsZero(num * 1);
  });
};

const checkIsZero = (number) => {
  if (number === 0) throw new Error(ERROR_MESSAGE.INPUT_NUMBER_IN_RANGE);
};

// 입력한 숫자가 모두 다른 숫자인지 확인하는 함수
const isInputDifferentNumber = (input) => {
  const check = new Set(input);
  if (check.size !== input.length) {
    throw new Error(ERROR_MESSAGE.INPUT_DIFFERENT_NUMBER);
  }
};

export default doValidate;
