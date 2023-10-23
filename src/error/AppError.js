import { ERROR_MESSAGES } from '../constants/errorMessages.js';

class AppError extends Error {
  /**
   * @type {string}
   */

  static PREFIX = '[ERROR]';

  /**
   * @type {string}
   */
  name;

  /**
   *
   * @param {string} errorMessage
   */

  constructor(errorMessage) {
    const message = `${AppError.PREFIX} ${errorMessage || ERROR_MESSAGES.ETC}`;
    super(message);
    this.name = this.constructor.name;
  }
}

export default AppError;
