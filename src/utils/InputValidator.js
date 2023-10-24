import { ErrorMessage } from "../domain/Constant.js";
import { StaticNumber } from "../domain/Constant.js";

const InputValidator = {
  validateUserNumber(input) {
    const inputNumbers = input.split("");
    if (input.length !== StaticNumber.BASEBALL_NUMBER_LENGTH)
      throw new Error(ErrorMessage.USER_LENGTH_ERROR);
    if (inputNumbers.includes("0"))
      throw new Error(ErrorMessage.USER_INCLUDE_ZERO_ERROR);
    if (input.replace(StaticNumber.POSSIBLE_BASEBALL_NUMBER, "").length > 0)
      throw new Error(ErrorMessage.USER_NUMBER_ERROR);
    if (inputNumbers.length !== new Set(inputNumbers).size)
      throw new Error(ErrorMessage.USER_DUPLICATE_ERROR);
  },

  validateRestartNumber(input) {
    if (input.length !== StaticNumber.RESTART_NUMBER_LENGTH)
      throw new Error(ErrorMessage.RESTART_COUNT_ERROR);
    if (input.replace(StaticNumber.POSSIBLE_END_OR_NOT_NUMBER, "").length > 0)
      throw new Error(ErrorMessage.RESTART_NUMBER_ERROR);
  },
};

export default InputValidator;
