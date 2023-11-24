import CONSTANTS from '../constants/constants.js';
import ERROR from '../constants/error.js';

class NumbersValidator {
  static validateNumbers(numbers) {
    const validators = [this.validateLength];
    validators.forEach(validator => validator(numbers));
  }

  static validateLength(numbers) {
    if (numbers.length !== CONSTANTS.number.maxLength) throw new Error(ERROR.numbers.length);
    return true;
  }
}

export default NumbersValidator;
