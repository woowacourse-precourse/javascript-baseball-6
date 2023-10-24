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
    const message = `${AppError.PREFIX} ${errorMessage}`;
    super(message);
    this.name = this.constructor.name;
  }
}

export default AppError;
