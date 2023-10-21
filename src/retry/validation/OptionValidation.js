const ValidationError = require('./ValidationError');
const ERROR = require('../constant/error');

const OptionValidation = {
  validateOption(option) {
    if (option !== '1' && option !== '2') {
      throw new ValidationError(ERROR.OPTION);
    }
  },
};

module.exports = OptionValidation;