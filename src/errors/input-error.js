import { ERROR_HEADER } from '../constants';

class InputError extends Error {
  constructor(message) {
    super(message);
    this.message = `${ERROR_HEADER} ${message}`;
  }
}

export default InputError;
