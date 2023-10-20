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
  isValidRange: (input) => {
    if (!Validator.isNumber(input)) return false;

    const MIN = 1;
    const MAX = 9;

    for (const key of String(input)) {
      const numberKey = Number(key);
      if (numberKey < MIN || numberKey > MAX) return false;
    }

    return true;
  },
  isExitOrRestart: (input) => { },
  isNumber: (input) => {
    return !isNaN(input);
  }
}

export default Validator;