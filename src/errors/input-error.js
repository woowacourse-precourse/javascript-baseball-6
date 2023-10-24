import CONSTANTS from '../assets/constants';

class InputError extends Error {
  constructor(message) {
    super(message);
    this.message = `${CONSTANTS.ERROR_HEADER} ${message}`;
  }
}

export default InputError;
