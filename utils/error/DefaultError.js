import { ERROR_MESSAGE } from '../../src/constants/Messages.js';

class DefaultError extends Error {
  /**
   * @param {string} message - 에러메시지
   */
  constructor(message) {
    super(message);
    this.message = `[${this.constructor.name}] ${message}`;
    this.name = ERROR_MESSAGE.error;
  }
}

export default DefaultError;
