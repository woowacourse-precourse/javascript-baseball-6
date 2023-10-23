import { PATTERN, ERROR_MESSAGES } from '../../constants/index.js';

// P-1 입력한 숫자에 대한 유효성 검사
class InputValidator {
  static isValidNumberSet = (input) => {
    if (!PATTERN.THREE_DIGIT_PATTERN.test(input))
      throw new Error(ERROR_MESSAGES.INVALID_COUNT_NUMBER);
  };
}

export default InputValidator;
