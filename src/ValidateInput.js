import { ERROR, OUT_OF_NUMBER_RANGE } from "./constants/Errors.js";
import { DELIMITER, NUMBER_LENGTH, USER_CHOICE } from "./constants/MagicNumber.js";

function validateCountInput(number) {
  const numberList = number.split(DELIMITER);
  const uniqueValues = [...new Set(numberList)];
  if (uniqueValues.length < NUMBER_LENGTH) {
    throw new Error(ERROR.overlap);
  }
  if (!OUT_OF_NUMBER_RANGE.test(number)) {
    throw new Error(ERROR.outOfRange);
  }
  if (number.length != NUMBER_LENGTH) {
    throw new Error(ERROR.notThreeDigit);
  }
}

function validateRetryInput(number) {
  if (number !== USER_CHOICE.retry && number !== USER_CHOICE.quit) {
    throw new Error(ERROR.notOneOrTwo);
  }
}

export { validateCountInput, validateRetryInput };
