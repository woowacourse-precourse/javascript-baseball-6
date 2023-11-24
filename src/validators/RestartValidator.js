import CONSTANTS from '../constants/constants.js';
import ERROR from '../constants/error.js';

const RestartValidator = {
  validateRestart(restart) {
    const validators = [this.validateRestartChoice];
    validators.forEach(validator => validator(restart));
  },

  validateRestartChoice(restart) {
    if (Number(restart) < CONSTANTS.restart.start || Number(restart) > CONSTANTS.restart.exit)
      throw new Error(ERROR.restart.choice);
    return true;
  },
};

export default RestartValidator;
