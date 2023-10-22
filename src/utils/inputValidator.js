import {
  validateIsNum,
  validateIsLengthNotCorrect,
  validateIncludeSpecificNumber,
  validateIsNumDuplicated,
} from "./validators.js";
import { INPUT_ERROR_MESSAGE } from "../constants/message.js";
import { MAGIC_NUM } from "../constants/magicNum.js";

export const validateUserInput = (value) => {
  try {
    if (!validateIsNum(Number(value))) {
      throw new Error(INPUT_ERROR_MESSAGE.NUM_ERR);
    } else if (
      validateIncludeSpecificNumber(value, [MAGIC_NUM.NUM_NOT_INCLUDED])
    ) {
      throw new Error(INPUT_ERROR_MESSAGE.INCLUDE_NUM_ERR);
    } else if (validateIsLengthNotCorrect(value, MAGIC_NUM.MAX_BASEBALL_NUM)) {
      throw new Error(INPUT_ERROR_MESSAGE.LENGTH_ERR);
    } else if (validateIsNumDuplicated(value)) {
      throw new Error(INPUT_ERROR_MESSAGE.DUPLICATE_ERR);
    }

    return true;
  } catch (err) {
    throw err;
  }
};

export const validationRestartInput = (value) => {
  try {
    if (!validateIsNum(Number(value))) {
      throw new Error(INPUT_ERROR_MESSAGE.NUM_ERR);
    } else if (validateIsLengthNotCorrect(value, MAGIC_NUM.MAX_RESTART_NUM)) {
      throw new Error(INPUT_ERROR_MESSAGE.RESTART_LENGTH_ERR);
    } else if (
      !validateIncludeSpecificNumber(value, [
        MAGIC_NUM.NEW_GAME_NUM,
        MAGIC_NUM.END_GAME_NUM,
      ])
    ) {
      throw new Error(INPUT_ERROR_MESSAGE.INCLUDE_NUMS_ERR);
    }
  } catch (err) {
    throw new Error(err);
  }
};
