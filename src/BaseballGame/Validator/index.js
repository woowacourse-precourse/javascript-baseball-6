import { NUMS, ERROR } from '../constants/index.js';
import ValidateError from './ValidateError/index.js';

class Validator {
  static guessNumber(input) {
    if (/[^1-9]/g.test(input) || new Set(input).size !== NUMS.THREE) {
      throw new ValidateError(ERROR.INVALID_LENGTH);
    }
  }

  static controlNumber(input) {
    if (![NUMS.REPLAY, NUMS.END].includes(input)) {
      throw new ValidateError(ERROR.INVALID_CONTROL_NUM);
    }
  }
}

export default Validator;
