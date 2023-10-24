const isNumeric = (userInputValue) => /^[1-9]+$/.test(userInputValue);

const isUniqueDigits = (userInputValue) => {
  const uniqueDigits = new Set(userInputValue.toString().split(''));
  return uniqueDigits.size === 3;
};

// eslint-disable-next-line import/prefer-default-export
const checkValidNumberDuringGame = (userInputValue) => {
  if (userInputValue.toString().length !== 3) return false;
  if (!isUniqueDigits(userInputValue)) return false;
  if (!isNumeric(userInputValue)) return false;
  return true;
};

export { isNumeric, isUniqueDigits, checkValidNumberDuringGame };
