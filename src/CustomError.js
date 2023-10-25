class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
    this.message = `[ERROR]`;
  }
}

export default CustomError;
