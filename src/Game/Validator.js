import { VALIDATOR_ERROR_MESSAGE } from "../Constants.js";

class Validator {
  static isValidInput(input) {
    if (!input) throw new Error(VALIDATOR_ERROR_MESSAGE.INPUT);
    if (input.length !== 3) throw new Error(VALIDATOR_ERROR_MESSAGE.LENGTH);
    if (input.includes("0")) throw new Error(VALIDATOR_ERROR_MESSAGE.ZERO);
    if (isNaN(input)) throw new Error(VALIDATOR_ERROR_MESSAGE.NAN);

    const uniqueDigits = [...new Set(input.split(""))];
    if (uniqueDigits.length !== input.length)
      throw new Error(VALIDATOR_ERROR_MESSAGE.UNIQUE);
    return true;
  }
}

export default Validator;
