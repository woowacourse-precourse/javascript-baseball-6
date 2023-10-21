class CustomError extends Error {
  constructor(message, source) {
    const prefix = '[ERROR]';
    super(`${prefix} ${message} ${source && `(occurred by ${source})`}`);
  }
}

export default CustomError;
