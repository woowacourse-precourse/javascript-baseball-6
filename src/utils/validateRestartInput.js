const validateRestartInput = (input) => {
  const validate = /^[12]$/.test(input);
  return validate;
};

export default validateRestartInput;
