const ValidationError = require('./ValidationError');

const UserValidation = {
  validateUser(user) {
    this.checkLength(user);
    this.checkRange(user);
  },

  checkLength(user) {
    if (user.length !== 3) {
      throw new ValidationError('[ERROR] 3자리 숫자를 입력할 수 있습니다.');
    }
  },

  checkDuplicate(user) {
    const userNumberDeletedDuplicate = new Set(user);

    if (userNumberDeletedDuplicate.size !== 3) {
      throw new ValidationError('[ERROR] 중복되는 숫자는 입력할 수 없습니다.');
    }
  },
};

module.exports = UserValidation;