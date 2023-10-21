class AppError extends Error {
  static PREFIX = '[ERROR]';

  constructor(message) {
    super(`\n${AppError.PREFIX} : ${message}\n`);
  }
}

export default AppError;
