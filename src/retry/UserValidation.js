const ValidationError = require('./ValidationError');

const UserValidation = {
  validateUser(user) {
    this.checkLength(user);
  },

  checkLength(user) {
    if (user.length !== 3) {
      throw new ValidationError('[ERROR] 3자리 숫자를 입력할 수 있습니다.');
    }
  },
};

module.exports = UserValidation;