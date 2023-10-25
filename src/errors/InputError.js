class InputError extends Error {
  constructor(message) {
    super(message);
    this.name = "InputError";
  }
}

export default InputError;
