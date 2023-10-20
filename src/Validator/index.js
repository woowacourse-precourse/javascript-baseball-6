import { CONTROL_NUMS, ASNWER_LENGTH } from '../constants/number.js';
import { ERROR } from '../constants/index.js';

class Validator {
  static isValidGuessNumber(input) {
    if ([...input].every(Number) && input.length === ASNWER_LENGTH) {
      throw Error(ERROR.VALID_LENGTH);
    }
  }

  static isValidControlNumber(input) {
    if (CONTROL_NUMS.includes(input)) {
      throw Error(ERROR.VALID_CONTROL_NUM);
    }
  }
}

export default Validator;
