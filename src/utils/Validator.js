import { ERROR_MESSAGE } from "../Constants.js";

class Validator {
  validate(input) {
    if (input.length !== 3) throw new Error(ERROR_MESSAGE.NOT_THREE_NUMBERS);
    if (input[0] === input[1] || input[0] === input[2] || input[1] === input[2])
      throw new Error(ERROR_MESSAGE.DUPLICATE_NUMBERS);
    if (input.includes(0)) throw new Error(ERROR_MESSAGE.INCLUDE_ZERO);
    if (isNaN(input[0]) || isNaN(input[1]) || isNaN(input[2]))
      throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
    return;
  }
}

export default Validator;
