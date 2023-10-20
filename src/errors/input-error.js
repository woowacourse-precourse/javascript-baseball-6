import { CONSTANTS } from '../utils';

class InputError extends Error {
  constructor(message) {
    super(message);
    this.message = `${CONSTANTS.ERROR_HEADER} ${message}`;
  }
}

export default InputError;
