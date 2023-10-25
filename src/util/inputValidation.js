import { RETRY, EXIT, NUMBER } from "../constants/number.js";
import { ERROR_MESSAGE } from "../constants/message.js";

function checkNumber(input) {
  const RegExp = /^[1-9]+$/g;
  if (!RegExp.test(input)) {
    throw new Error(ERROR_MESSAGE.NUMBER);
  }
}

function checkLength(input) {
  if (input.length !== NUMBER.BASEBALL_LENGTH) {
    throw new Error(ERROR_MESSAGE.LENGTH);
  }
}

function checkDuplicate(input) {
  const inputSet = new Set([...input]);
  if (inputSet.size !== input.length) {
    throw new Error(ERROR_MESSAGE.DUPLICATE);
  }
}

function checkRetry(input) {
  if (!(input === RETRY || input === EXIT)) {
    throw new Error(ERROR_MESSAGE.RETRY);
  }
}

export { checkNumber, checkLength, checkDuplicate, checkRetry };
