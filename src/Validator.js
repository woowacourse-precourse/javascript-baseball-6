export function validateThreeDigitsNumber(userInput) {
  validateInputLength(userInput);
  validateIncludeNotNumber(userInput);
  validateIncludeZero(userInput);
  validateNumberDuplicate(userInput);

  // 모든 케이스 통과
  return stringToThreeNumberArray(userInput);
};

export function validateRetryGame(userInput) {
  validateOneOrTwo(userInput);
  return userInput;
}

function validateInputLength (userInput) {
  if (userInput.length !== 3) {
    throw new Error("[ERROR]");
  }
};


function validateIncludeNotNumber (userInput) {
  const isNotNumberRegEx = /[^0-9]/;

  if (isNotNumberRegEx.test(userInput)) {
    throw new Error("[ERROR]");
  }
};


function validateIncludeZero (userInput) {
  if (userInput.includes('0')) {
    throw new Error("[ERROR]")
  }
}


function validateNumberDuplicate (userInput) {
  const threeNumber = stringToThreeNumberArray(userInput);
  const countArray = Array(9).fill(0);

  threeNumber.map(number => ++countArray[number - 1]); 

  countArray.forEach(number => {
    if (number >= 2) throw new Error("[ERROR]")
  })
}

function validateOneOrTwo (userInput) {
  if (userInput !== '1' && userInput !== '2') {
    throw new Error("[ERROR]");
  }
}

function stringToThreeNumberArray (userInput) {
  return [...userInput].map(Number);
}