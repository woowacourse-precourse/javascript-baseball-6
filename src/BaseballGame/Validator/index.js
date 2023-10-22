import { NUMS, ERROR } from '../constants/index.js';

class Validator {
  static guessNumber(input) {
    if (![...input].every(Number) || new Set(input).size !== NUMS.THREE) {
      throw Error(`[ERROR] ${ERROR.INVALID_LENGTH}`);
    }
  }

  static controlNumber(input) {
    if (![NUMS.REPLAY, NUMS.END].includes(input)) {
      throw Error(`[ERROR] ${ERROR.INVALID_CONTROL_NUM}`);
    }
  }
}

export default Validator;
