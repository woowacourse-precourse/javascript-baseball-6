import { errorMessages } from './Message.js';

/**
 * 입력값이 숫자가 아니면 에러 발생
 * @param {String} input 
 */
export const checkInputType = (input) => {
  if (input.match(/\D/g)) throw new Error(errorMessages.INPUT_TYPE_ERROR);
};

/**
 * 입력값이 3자리가 아니면 에러 발생
 * @param {String} input 
 */
export const checkInputLen = (input) => {
  if (input.length !== 3) {
    throw new Error(errorMessages.INPUT_LEN_ERROR);
  }
};

/**
 * 입력값에 중복된 수가 있으면 에러 발생
 * @param {String} input 
 */

export const checkInputSameNum = (input) => {
  let inputArr = [...input, input[0]];
  let checkValid = true;
  inputArr.reduce((prev, cur, i) => {
    prev = inputArr[i - 1];
    if (prev === cur) return (checkValid = false);
  });
  if (!checkValid) throw new Error(errorMessages.INPUT_SAME_NUM_ERROR);
};

/**
 * 재시작/종료 문구 후 입력값이 1,2가 아니면 에러 발생
 * @param {String} input 
 */
export const checkRestartInput = (input) => {
  if (input !== '1' || input !== '2') throw errorMessages.RESTART_INPUT_ERROR;
};
