import constants from '../../constants/index.js';

const { THREE_DIGIT_PATTERN } = constants;

// P-1 입력한 숫자에 대한 유효성 검사
class InputValidator {
  static isValidNumberSet = (input) => {
    return THREE_DIGIT_PATTERN.test(input);
  };
}

export default InputValidator;
