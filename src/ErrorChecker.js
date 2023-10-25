import { INVALID_INPUT, INVALID_END_INPUT } from './Constants.js';

export default class ErrorChecker {
  static validateIsString(input) {
    if (typeof input !== 'string') {
      throw new Error(INVALID_INPUT);
    }
  }

  static validateNoDuplicate(input) {
    if (new Set(input).size !== input.length) {
      throw new Error(INVALID_INPUT);
    }
  }

  static validateNumberLength(input) {
    if (input.length !== 3) {
      throw new Error(INVALID_INPUT);
    }
  }

  static validateInRange(input) {
    for (let i = 0; i < input.length; i++) {
      if (input[i] < '1' || input[i] > '9') {
        throw new Error(INVALID_INPUT);
      }
    }
  }

  static validateInput(input) {
    this.validateIsString(input);
    this.validateNoDuplicate(input);
    this.validateNumberLength(input);
    this.validateInRange(input);
  }

  static validateGameEndInput(input) {
    if (input !== '1' && input !== '2') {
      throw new Error(INVALID_END_INPUT);
    }
  }
}
