const Validator = {
  isValidLength: (input) => {
    const SIZE = 3;

    return String(input).length === SIZE;
  },
  hasUniqueNumbers: (input) => { },
  isValidRange: (input) => { },
  isExitOrRestart: (input) => { },
  isNumber: (input) => {
    return !isNaN(input);
  }
}

export default Validator;