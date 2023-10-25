import { ERROR, OUT_OF_NUMBER_RANGE } from "./constants/Errors.js";
import { DELIMITER, NUMBER_LENGTH } from "./constants/MagicNumber.js";

function validateInput(number) {
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

export { validateInput };
