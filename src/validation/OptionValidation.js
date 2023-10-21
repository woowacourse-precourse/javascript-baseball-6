const ValidationError = require('./ValidationError');

const OptionValidation = {
  validateOption(option) {
    if (option !== '1' && option !== '2') {
      throw new ValidationError('[ERROR] 1 혹은 2를 입력할 수 있습니다.');
    }
  },
};

module.exports = OptionValidation;