import { CONTROL_NUMS, ASNWER_LENGTH } from '../contants/index.js';

class Validator {
  static isValidGuessNumber(input) {
    if ([...input].every(Number) && input.length === ASNWER_LENGTH) {
      throw Error(`숫자 ${ASNWER_LENGTH}개를 입력하세요.`);
    }
  }

  static isValidControlNumber(input) {
    if (CONTROL_NUMS.includes(input)) {
      throw Error('1, 2 중 1개를 입력하세요');
    }
  }
}

export default Validator;
