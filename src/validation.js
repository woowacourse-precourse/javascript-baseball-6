import { BASEBALL_NUMBER } from "./constants";
import { ERROR } from "./message";

export const validateUserNum = (numberList) => {
  const isOkNumberRange = (number) =>
    number <= BASEBALL_NUMBER.MAX && number >= BASEBALL_NUMBER.MIN;

  if (numberList.length !== BASEBALL_NUMBER.DIGIT)
    throw new Error(" [ERROR] " + ERROR.INVALID_DIGITS);

  if (new Set(numberList).size !== numberList.length)
    throw new Error(" [ERROR] " + ERROR.DUPLICATE_NUM);

  if (!numberList.every(Number))
    throw new Error(" [ERROR] " + ERROR.INVALID_TYPE);

  if (!numberList.every(isOkNumberRange))
    throw new Error(" [ERROR] " + ERROR.OUT_OF_RANGE);
};
