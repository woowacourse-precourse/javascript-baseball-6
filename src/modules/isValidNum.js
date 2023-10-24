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

function isValidNum(userInput) {
  const userInputArray = userInput.split("");
  if (getArrayLength(userInputArray) && convertToNumber(userInputArray)) {
    // return true;
    return console.log("true");
  }

  // return false;
  return console.log("false");
}
export { isValidNum };
