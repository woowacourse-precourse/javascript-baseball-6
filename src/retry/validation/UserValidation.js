const ValidationError = require('./ValidationError');
const ERROR = require('../constant/error');
const VALUE = require('../constant/value');


const UserValidation = {
  validateUser(user) {
    this.checkLength(user);
    this.checkRange(user);
    this.checkDuplicate(user);
  },

  checkLength(user) {
    if (user.length !== VALUE.LENGTH) {
      throw new ValidationError(ERROR.NUMBER_LENGTH);
    }
  },

  checkDuplicate(user) {
    const userNumberDeletedDuplicate = new Set(user);
    if (userNumberDeletedDuplicate.size !== VALUE.LENGTH) {
      throw new ValidationError(ERROR.NUMBER_DUPLICATE);
    }
  },

  checkRange(user) {
    const regex = /^[1-9]+$/g;
    if (!regex.test(user)) {
      throw new ValidationError(ERROR.NUMBER_RANGE);
    }
  },
};

module.exports = UserValidation;