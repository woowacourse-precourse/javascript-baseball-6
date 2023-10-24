import { errorMessages, messages } from './Message.js';

/**
 * 숫자가 아닌 입력값이 있으면 false 반환
 */
export const checkInputType = (input) => {
  if (input.match(/\D/g)) throw new Error(errorMessages.INPUT_TYPE_ERROR);
};

export const checkInputLen = (input) => {
  if (input.length !== 3) {
    throw new Error(errorMessages.INPUT_LEN_ERROR);
  }
};

export const checkInputSameNum = (input) => {
  let inputArr = [...input, input[0]];
  let checkValid = true;
  inputArr.reduce((prev, cur, i) => {
    prev = inputArr[i - 1];
    if (prev === cur) return (checkValid = false);
  });
  if (!checkValid) throw new Error(errorMessages.INPUT_SAME_NUM_ERROR);
};

export const checkRestartInput = (input) => {
  if (input != 1 || input != 2) throw errorMessages.RESTART_INPUT_ERROR;
};
