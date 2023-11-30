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
    if (numbers.length !== CONSTANTS.number.numberSize) throw new Error(ERROR.numbers.length);
  },

  validateNaN(numbers) {
    if (Number.isNaN(Number(numbers))) throw new Error(ERROR.numbers.notANumber);
  },

  validateNegative(numbers) {
    if (Number(numbers) < CONSTANTS.number.zero) throw new Error(ERROR.numbers.negative);
  },

  validateDuplicated(numbers) {
    if (numbers.length !== new Set(numbers).size) throw new Error(ERROR.numbers.duplicated);
  },

  validateEmpty(numbers) {
    if (numbers.length === CONSTANTS.number.zero) throw new Error(ERROR.numbers.empty);
  },
};

export default NumbersValidator;
