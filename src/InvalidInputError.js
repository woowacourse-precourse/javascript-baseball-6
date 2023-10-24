class InvalidInputError extends Error {
  constructor() {
    super("[ERROR]");
    this.name = "InvalidInputError";
  }
}

export default InvalidInputError;
