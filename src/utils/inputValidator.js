import {
  validateIsNum,
  validateIsLengthNotThree,
  validateIncludeZero,
  validateIsNumDuplicated,
} from "./validators.js";
import { INPUT_ERROR_MESSAGE } from "../constants/message.js";

export const validateUserInput = (value) => {
  if (!validateIsNum(Number(value))) throw Error(INPUT_ERROR_MESSAGE.NUM_ERR);
  else if (validateIsLengthNotThree(value))
    throw Error(INPUT_ERROR_MESSAGE.LENGTH_ERR);
  else if (validateIncludeZero(value))
    throw Error(INPUT_ERROR_MESSAGE.INCLUDE_ZERO_ERR);
  else if (validateIsNumDuplicated(value))
    throw Error(INPUT_ERROR_MESSAGE.DUPLICATE_ERR);

  return true;
};
