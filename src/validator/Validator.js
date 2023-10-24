const Validator = {
  isValidLength: (input, { size }) => {
    return String(input).length === size;
  },
  hasUniqueValue: (input) => {
    const array = String(input).split('');
    const filteredArray = [...new Set(array)];

    return filteredArray.length === array.length;
  },
  isValidRange: (input, { min, max }) => {
    if (!Validator.isNumber(input)) return false;

    for (const key of String(input)) {
      const numberKey = Number(key);
      if (numberKey < min || numberKey > max) return false;
    }

    return true;
  },
  isExitOrRestart: (input, { restart, exit }) => {
    const numberInput = Number(input);

    return numberInput === restart || numberInput === exit;
  },
  isNumber: (input) => {
    return !isNaN(input);
  }
}

export default Validator;