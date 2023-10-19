const isEmptyValue = (userInput) => {
  return userInput === '';
};

const isNotNumber = (userInput) => {
  return userInput.match(/\D/);
};

const isOverMaxLength = (userInput) => {
  return userInput.length > 3;
};

const isWithZero = (userInput) => {
  return userInput.match(/0/);
};

const isNotValidNumberRange = (userInput) => {
  return isWithZero(userInput) || isNotNumber(userInput);
};

const isDuplicatedNumber = (userInput) => {
  const userInputNumberSet = new Set(userInput);
  return userInputNumberSet.size !== userInput.length;
};

export const validateUserNumber = (userInput) => {
  if (isEmptyValue(userInput)) {
    throw new Error('값을 입력하세요');
  } else if (isOverMaxLength(userInput)) {
    throw new Error('3자리 숫자를 입력하세요');
  } else if (isNotValidNumberRange(userInput)) {
    throw new Error('1-9 범위의 숫자를 입력하세요');
  } else if (isDuplicatedNumber(userInput)) {
    throw new Error('중복되지 않는 숫자를 입력하세요');
  }
};
