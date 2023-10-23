function throwInvalidInputErrorMessage(errorMessage) {
  const ERROR_TEXT = `[ERROR] ${errorMessage}.`;
  throw ERROR_TEXT;
}

export default throwInvalidInputErrorMessage;
