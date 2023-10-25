import { INPUT_ERROR_MESSAGE } from "../../constants.js";
import InputError from "../../errors/InputError.js";

const validateNumberInput = (input) => {
  if (!isThreeNumbers(input) || !isUniqueChars(input)) {
    throw new InputError(INPUT_ERROR_MESSAGE.NUMBER);
  }
};

const isThreeNumbers = (str) => {
  return /^[1-9]{3}$/.test(str);
};

const isUniqueChars = (str) => {
  return new Set(str.split("")).size === str.length;
};

export default validateNumberInput;
