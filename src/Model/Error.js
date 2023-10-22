export class CustomError extends Error {
  constructor(message) {
    super(`[ERROR] ${message}`);
  }
}
