import CONSTANTS from '../constants/constants.js';
import ERROR from '../constants/error.js';

class NumbersValidator {
  static validateNumbers(numbers) {
    const validators = [
      this.#validateEmpty,
      this.#validateNegative,
      this.#validateNaN,
      this.#validateLength,
      this.#validateDuplicated,
    ];
    validators.forEach(validator => validator(numbers));
  }

  static #validateLength(numbers) {
    if (numbers.length !== CONSTANTS.number.numberSize) throw new Error(ERROR.numbers.length);
  }

  static #validateNaN(numbers) {
    if (Number.isNaN(Number(numbers))) throw new Error(ERROR.numbers.notANumber);
  }

  static #validateNegative(numbers) {
    if (Number(numbers) < CONSTANTS.number.zero) throw new Error(ERROR.numbers.negative);
  }

  static #validateDuplicated(numbers) {
    if (numbers.length !== new Set(numbers).size) throw new Error(ERROR.numbers.duplicated);
  }

  static #validateEmpty(numbers) {
    if (numbers.length === CONSTANTS.number.zero) throw new Error(ERROR.numbers.empty);
  }
}

export default NumbersValidator;
