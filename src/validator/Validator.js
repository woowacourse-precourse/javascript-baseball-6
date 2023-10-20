const Validator = {
  isValidLength: (input) => {
    const SIZE = 3;

    return String(input).length === SIZE;
  },
  hasUniqueNumbers: (input) => {
    if (!Validator.isNumber(input)) return false;

    const array = String(input).split('');
    const filteredArray = [...new Set(array)];

    return filteredArray.length === array.length;
  },
  isValidRange: (input) => { },
  isExitOrRestart: (input) => { },
  isNumber: (input) => {
    return !isNaN(input);
  }
}

export default Validator;