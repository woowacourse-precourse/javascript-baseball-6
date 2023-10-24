class InputError extends Error {
  constructor(phrases) {
    super(`[ERROR] ${phrases}`);
  }
}

export default InputError;
