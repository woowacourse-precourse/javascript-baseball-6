const ValidationError = require('./ValidationError');
const ERROR = require('../constant/error');
const VALUE = require('../constant/value');


const OptionValidation = {
  validateOption(option) {
    if (option !== VALUE.OPTION_RESTART && option !== VALUE.OPTION_FINISH) {
      throw new ValidationError(ERROR.OPTION);
    }
  },
};

module.exports = OptionValidation;