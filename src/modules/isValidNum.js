function getArrayLength(userInputArray) {
  if (userInputArray.length != 3) return false;
  return true;
}

function convertToNumber(userInputArray) {
  return userInputArray.every((item) => {
    const number = Number(item);
    return !isNaN(number) && number >= 1 && number <= 9;
  });
}

function hasDuplicates(userInputArray) {
  return new Set(userInputArray).size == 3;
}

function isValidNum(userInput) {
  const userInputArray = userInput.split("");
  if (
    getArrayLength(userInputArray) &&
    convertToNumber(userInputArray) &&
    hasDuplicates(userInputArray)
  ) {
    return true;
  }

  return false;
}
export { isValidNum };
