import CONSTANTS from '../constants/constants.js';
import ERROR from '../constants/error.js';

class RestartValidator {
  static validateRestart(restart) {
    const validators = [
      this.#validateEmpty,
      this.#validateNaN,
      this.#validateNegative,
      this.#validateRestartChoice,
    ];
    validators.forEach(validator => validator(restart));
  }

  static #validateRestartChoice(restart) {
    if (Number(restart) < CONSTANTS.restart.start || Number(restart) > CONSTANTS.restart.exit)
      throw new Error(ERROR.restart.choice);
  }

  static #validateNegative(restart) {
    if (Number(restart) < CONSTANTS.number.zero) throw new Error(ERROR.numbers.negative);
  }

  static #validateNaN(restart) {
    if (Number.isNaN(Number(restart))) throw new Error(ERROR.numbers.notANumber);
  }

  static #validateEmpty(restart) {
    if (restart.length === CONSTANTS.number.zero) throw new Error(ERROR.restart.empty);
  }
}

export default RestartValidator;
