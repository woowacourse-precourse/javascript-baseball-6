function getArrayLength(userInputArray) {
  if (userInputArray.length != 3) return false;
  return true;
}

function convertToNumber(userInputArray) {
  const areAllNumbers = userInputArray.every((item) => !isNaN(Number(item)));
  return areAllNumbers;
}

function isValidNum(userInput) {
  const userInputArray = userInput.split("");
  if (getArrayLength(userInputArray) && convertToNumber(userInputArray)) {
    // return true;
    return console.log("true");
  }
  //   return console.log(userInputArray);
//   console.log(userInputArray)
  return console.log("false");
}
export { isValidNum };
