/**
 * '일관된 에러 메시지 제공'의 역할을 수행
 */
class AppError extends Error {
  /**
   * @static
   * @public
   * @constant
   * @type {string}
   */
  static PREFIX = '[ERROR]';

  /**
   * @param {string} message - 에러 메시지
   */
  constructor(message) {
    super(`\n${AppError.PREFIX} : ${message}\n`);
  }
}

export default AppError;
