const ERRORS = {
  NOT_STRING: '[ERROR] 입력값은 문자열이어야 합니다.',
  NOT_THREE_DIGITS: '[ERROR] 입력값은 3자리 숫자이어야 합니다.',
  DUPLICATE_DIGITS: '[ERROR] 입력값은 중복된 숫자를 포함할 수 없습니다.',
  OUT_OF_RANGE: '[ERROR] 입력값은 1부터 9까지의 숫자로 이루어져야 합니다.',
  INVALID_END_INPUT: '[ERROR] 1과 2만 입력할 수 있습니다.',
};

export default class InputValidator {
  static validateIsString(input) {
    if (typeof input !== 'string') {
      throw new Error(ERRORS.NOT_STRING);
    }
  }

  static validateIsThreeDigits(input) {
    if (input.length !== 3) {
      throw new Error(ERRORS.NOT_THREE_DIGITS);
    }
  }

  static validateNoDuplicateDigits(input) {
    if (new Set(input).size !== input.length) {
      throw new Error(ERRORS.DUPLICATE_DIGITS);
    }
  }

  static validateInRange(input) {
    const regex = /^[1-9]{3}$/;
    if (!regex.test(input)) {
      throw new Error(ERRORS.OUT_OF_RANGE);
    }
  }

  static validateInput(input) {
    this.validateIsString(input);
    this.validateIsThreeDigits(input);
    this.validateNoDuplicateDigits(input);
    this.validateInRange(input);
  }

  static validateGameEndInput(input) {
    if (input !== '1' && input !== '2') {
      throw new Error(ERRORS.INVALID_END_INPUT);
    }
  }
}
