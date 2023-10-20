import { ErrorMessage } from "../constant/Constant.mjs";

const InputValidator = {
  validateUserNumber(input) {
    const inputNumbers = input.split("");
    if (input.length !== 3) throw new Error(ErrorMessage.INPUT_LENGTH_ERROR);
    if (input.replace(/[1-9]/g, "").length > 0)
      throw new Error(ErrorMessage.INPUT_NUMBER_ERROR);
    if (inputNumbers.length !== new Set(inputNumbers).size)
      throw new Error(ErrorMessage.INPUT_DUPLICATE_ERROR);
    if (inputNumbers.includes("0"))
      throw new Error(ErrorMessage.INPUT_INCLUDE_ZERO_ERROR);
  },

  validateRestartNumber(input) {
    if (input.length !== 1) throw new Error(ErrorMessage.RESTART_COUNT_ERROR);
    if (input.replace(/1|2/g, "").length > 0)
      throw new Error(ErrorMessage.RESTART_NUMBER_ERROR);
  },
};

export default InputValidator;
