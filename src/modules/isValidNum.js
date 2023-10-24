function getArrayLength(userInputArray) {
  if (userInputArray.length != 3) return false;
  return true;
}

function isValidNum(userInput) {
  const userInputArray = userInput.split("");
  if (getArrayLength(userInputArray)) {
    // return true;
    return console.log('true');
  }
  //   return console.log(userInputArray);
  return console.log("false");
}
export { isValidNum };
