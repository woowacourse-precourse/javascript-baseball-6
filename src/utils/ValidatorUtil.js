import { ERROR_MESSAGES } from "../constants";

class ValidatorUtil {
  static validateLength(input, length) {
    if (input.length !== length) {
      throw new Error(ERROR_MESSAGES.INVALID_LENGTH(length));
    }
  }

  static validateNotDuplicate(input) {
    if (new Set(input).size !== input.length) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_VALUE);
    }
  }

  static validateIsNumber(input) {
    if (isNaN(input)) {
      throw new Error(ERROR_MESSAGES.NOT_NUMBER);
    }
  }
}

export default ValidatorUtil;
