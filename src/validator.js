const isNumeric = (userInputValue) => /^[1-9]+$/.test(userInputValue);

const isUniqueDigits = (userInputValue) => new Set(userInputValue.toString().split('')).size === 3;

const isValidGameInputDuringGame = (userInputValue) => {
  if (userInputValue.toString().length !== 3) return false;
  if (!isUniqueDigits(userInputValue)) return false;
  if (!isNumeric(userInputValue)) return false;
  return true;
};

export { isNumeric, isUniqueDigits, isValidGameInputDuringGame };
