import { INPUT_ERROR_MESSAGE } from "../../constants.js";
import InputError from "../../errors/InputError.js";

const validateProcessStateInput = (input) => {
  if (!isOneOrTwo(input)) {
    throw new InputError(INPUT_ERROR_MESSAGE.PROCESS_STATE);
  }
};

const isOneOrTwo = (str) => {
  return /^[1-2]{1}$/.test(str);
};

export default validateProcessStateInput;
