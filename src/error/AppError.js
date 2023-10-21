class AppError extends Error {
  /**
   * @type {string}
   */

  static PREFIX = '[ERROR]';

  /**
   * @type {string}
   */
  name;

  constructor(errorMessage) {
    const message = `${AppError.PREFIX} ${errorMessage || '알 수 없는 에러가 발생했어요!'}`;
    super(message);
    this.name = this.constructor.name;
  }
}

export default AppError;
