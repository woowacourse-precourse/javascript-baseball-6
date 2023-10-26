import { VALIDATION_ERRORS } from '../constants/MessageConstants';
import { RESTART_GAME, END_GAME } from '../constants/GameConstants';

export default class InputValidator {
  static validateIsString(input) {
    if (typeof input !== 'string') {
      throw new Error(VALIDATION_ERRORS.NOT_STRING);
    }
  }

  static validateIsThreeDigits(input) {
    if (input.length !== 3) {
      throw new Error(VALIDATION_ERRORS.NOT_THREE_DIGITS);
    }
  }

  static validateNoDuplicateDigits(input) {
    if (new Set(input).size !== input.length) {
      throw new Error(VALIDATION_ERRORS.DUPLICATE_DIGITS);
    }
  }

  static validateInRange(input) {
    const regex = /^[1-9]{3}$/;
    if (!regex.test(input)) {
      throw new Error(VALIDATION_ERRORS.OUT_OF_RANGE);
    }
  }

  static validateInput(input) {
    this.validateIsString(input);
    this.validateIsThreeDigits(input);
    this.validateNoDuplicateDigits(input);
    this.validateInRange(input);
  }

  static validateGameEndInput(input) {
    if (input !== RESTART_GAME && input !== END_GAME) {
      throw new Error(VALIDATION_ERRORS.INVALID_END_INPUT);
    }
  }
}
