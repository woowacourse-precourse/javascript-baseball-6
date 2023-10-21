/**
 * '일관된 에러 메시지 제공'의 역할을 수행
 */
class AppError extends Error {
  /**
   * 모든 에러 메시지에 추가되는 접두사
   * @static
   * @constant
   * @type {string}
   */
  static PREFIX = '[ERROR]';

  /**
   * 새로운 AppError를 생성
   * @param {string} message - 에러 메시지
   */
  constructor(message) {
    super(`\n${AppError.PREFIX} : ${message}\n`);
  }
}

export default AppError;
