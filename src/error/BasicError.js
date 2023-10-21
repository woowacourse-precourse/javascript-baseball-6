class BasicError extends Error {
  constructor(msg) {
    super(`[ERROR] ${msg}`);
  }
}

export default BasicError;
