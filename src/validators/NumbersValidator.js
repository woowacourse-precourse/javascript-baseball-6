import CONSTANTS from '../constants/constants.js';
import ERROR from '../constants/error.js';

class NumbersValidator {
  static validateNumbers(numbers) {
    const validators = [this.validateNegative, this.validateNaN, this.validateLength];
    validators.forEach(validator => validator(numbers));
  }

  static validateLength(numbers) {
    if (numbers.length !== CONSTANTS.number.maxLength) throw new Error(ERROR.numbers.length);
    return true;
  }

  static validateNaN(numbers) {
    if (isNaN(numbers)) throw new Error(ERROR.numbers.notANumber);
    return true;
  }

  static validateNegative(numbers) {
    if (Number(numbers) < CONSTANTS.number.zero) throw new Error(ERROR.numbers.negative);
    return true;
  }
}

export default NumbersValidator;
