class CustomError extends Error {
  static #prefix = '[ERROR]';

  constructor(message) {
    super(`${CustomError.#prefix} ${message}`);
  }
}

export default CustomError;
