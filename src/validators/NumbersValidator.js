import CONSTANTS from '../constants/constants.js';
import ERROR from '../constants/error.js';

const NumbersValidator = {
  validateNumbers(numbers) {
    const validators = [
      this.validateEmpty,
      this.validateNegative,
      this.validateNaN,
      this.validateLength,
      this.validateDuplicated,
    ];
    validators.forEach(validator => validator(numbers));
  },

  validateLength(numbers) {
    if (numbers.length !== CONSTANTS.number.maxLength) throw new Error(ERROR.numbers.length);
    return true;
  },

  validateNaN(numbers) {
    if (isNaN(numbers)) throw new Error(ERROR.numbers.notANumber);
    return true;
  },

  validateNegative(numbers) {
    if (Number(numbers) < CONSTANTS.number.zero) throw new Error(ERROR.numbers.negative);
    return true;
  },

  validateDuplicated(numbers) {
    if (numbers.length !== new Set(numbers).size) throw new Error(ERROR.numbers.duplicated);
    return true;
  },

  validateEmpty(numbers) {
    if (numbers.length === CONSTANTS.number.zero) throw new Error(ERROR.numbers.empty);
    return true;
  },
};

export default NumbersValidator;
