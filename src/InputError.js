class InputError extends Error {
  constructor(phrases) {
    super(`[Error] ${phrases}`);
  }
}

export default InputError;
