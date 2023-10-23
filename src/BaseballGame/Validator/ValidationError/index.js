import { ERROR } from '../../constants';

class ValidateError extends Error {
  constructor(message) {
    super(`${ERROR.PREFIX} ${message}`);
    this.name = this.constructor.name;
  }
}

export default ValidateError;
