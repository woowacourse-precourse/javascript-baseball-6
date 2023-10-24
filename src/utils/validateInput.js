import { ERROR_MESSAGE } from "./constants.js";

export const validateInput = (input) => {
  const inputLength = input.length;

  if (isNaN(Number(input))) {
    throw new Error(ERROR_MESSAGE.NOT_NUMBER);
  }

  if (inputLength !== 3) {
    throw new Error(ERROR_MESSAGE.NOT_THREE_DIGIT_NUMBER);
  }

  if (new Set(input).size !== inputLength) {
    throw new Error(ERROR_MESSAGE.DUPLICATED_NUMBER);
  }

  if (input.includes("0")) {
    throw new Error(ERROR_MESSAGE.ZERO_NUMBER);
  }
};
