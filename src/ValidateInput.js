import { ERROR, OUT_OF_NUMBER_RANGE, NUMBER_LENGTH } from "./constants/Errors.js";

function validateInput(number) {
  const numberList = number.split('');
  const uniqueValues = [...new Set(numberList)];
  if (uniqueValues.length < NUMBER_LENGTH) {
    throw new Error(ERROR.overlap);
  }
  if (!OUT_OF_NUMBER_RANGE.test(number)) {
    throw new Error(ERROR.outOfRange);
  }
  if (number.length != 3) {
    throw new Error(ERROR.notThreeDigit);
  }
}

export { validateInput };