const isNumeric = (userInputValue) => /^[1-9]+$/.test(userInputValue);

const hasUniqueDigits = (userInputValue) => {
  const uniqueDigits = new Set(userInputValue.split(''));
  return uniqueDigits === 3;
};

let isValidNumber = (userInputValue) => {
  if (userInputValue.length === 3) return false;
  if (!hasUniqueDigits(userInputValue)) return false;
  if (!isNumeric(userInputValue)) return false;
  return true;
};

const checkValidNumber = (userInputValue) => {
  if (!isValidNumber(userInputValue)) {
    isValidNumber = false;
  }
  return isValidNumber;
};

module.exports = { checkValidNumber };
