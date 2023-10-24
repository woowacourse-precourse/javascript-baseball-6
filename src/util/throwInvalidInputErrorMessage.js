function throwInvalidInputErrorMessage(error) {
  const ERROR_TEXT = `${error}.`;
  throw ERROR_TEXT;
}

export default throwInvalidInputErrorMessage;
