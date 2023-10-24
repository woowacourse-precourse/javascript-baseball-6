class CustomError extends Error {
  static #prefix = '[ERROR]';

  constructor(message, source) {
    super(`${CustomError.#prefix} ${message}${source ? ` (occurred by ${source})` : ''}`);
  }
}

export default CustomError;
