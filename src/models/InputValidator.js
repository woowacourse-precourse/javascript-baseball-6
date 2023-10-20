const InputValidator = {
  
  numberValidate(input) {
    const typeValidate = /^\d+$/.test(input);
    const digitsValidate = new Set(input).size === 3 && input.length === 3;
    const rangeValidate = !input.includes('0');

    return typeValidate && digitsValidate && rangeValidate;
  },

  commandValidate(input) {
    return input === '1' || input === '2';
  },
};

export default InputValidator;