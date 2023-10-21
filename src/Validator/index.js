import { NUMS, ERROR } from '../constants/index.js';

class Validator {
  static guessNumber(input) {
    if (
      ![...input].every(Number) ||
      input.length !== NUMS.ASNWER_LENGTH ||
      new Set(input).size !== NUMS.ASNWER_LENGTH
    ) {
      throw Error(ERROR.VALID_LENGTH);
    }
  }

  static controlNumber(input) {
    if (![NUMS.REPLAY, NUMS.END].includes(input)) {
      throw Error(ERROR.VALID_CONTROL_NUM);
    }
  }
}

export default Validator;
