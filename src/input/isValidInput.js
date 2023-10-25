function isThreeNumber(userInput) {
  if(userInput.length !== 3) return false;
  return true;
}

function isUniqueNumber(userInput) {
  const UNIQUE_NUM = new Set();
  for(let i = 0; i < userInput.length; i++) {
    UNIQUE_NUM.add(userInput[i]);
  }
  if(UNIQUE_NUM.size !== 3) return false;
  return true;
}

function isOneToNineNumber(userInput) {
  return userInput.split('').every(number => Number(number) >= 1 && Number(number) <= 9)
}

function isValidNumber(userInput) {
  if(!isThreeNumber(userInput)) throw new Error('[ERROR]');
  if(!isUniqueNumber(userInput)) throw new Error('[ERROR]');
  if(!isOneToNineNumber(userInput)) throw new Error('[ERROR]');
  return true;
}

export default isValidNumber;
