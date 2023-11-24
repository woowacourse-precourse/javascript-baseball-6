import CONSTANTS from '../constants/constants.js';
import ERROR from '../constants/error.js';

const RestartValidator = {
  validateRestart(restart) {
    const validators = [this.validateNaN, this.validateNegative, this.validateRestartChoice];
    validators.forEach(validator => validator(restart));
  },

  validateRestartChoice(restart) {
    if (Number(restart) < CONSTANTS.restart.start || Number(restart) > CONSTANTS.restart.exit)
      throw new Error(ERROR.restart.choice);
    return true;
  },

  validateNegative(restart) {
    if (Number(restart) < CONSTANTS.number.zero) throw new Error(ERROR.numbers.negative);
    return true;
  },

  validateNaN(restart) {
    if (isNaN(restart)) throw new Error(ERROR.numbers.notANumber);
    return true;
  },
};

export default RestartValidator;
