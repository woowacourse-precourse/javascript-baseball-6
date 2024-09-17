import { MESSAGES } from './messages.js';

const isDigit = (number) => {
  return !isNaN(number);
};

const isThreeLength = (numberArr) => {
  return numberArr.length === 3;
};

const isBetweenOneAndNine = (numberArr) => {
  return numberArr.every((curNum) => curNum >= 1 && curNum <= 9);
};

const isUnique = (numberArr) => {
  return numberArr.length === new Set(numberArr).size;
};

// input number validate function
const validateInputNumber = (userNumber) => {
  if (!isDigit(userNumber.join(''))) {
    throw new Error(MESSAGES.ERROR.TYPE_ERROR);
  }

  if (!isThreeLength(userNumber)) {
    throw new Error(MESSAGES.ERROR.OUT_OF_LENGTH);
  }

  if (!isBetweenOneAndNine(userNumber)) {
    throw new Error(MESSAGES.ERROR.OUT_OF_INPUT_NUMBER_RANGE);
  }

  if (!isUnique(userNumber)) {
    throw new Error(MESSAGES.ERROR.DUPLICATION_ERROR);
  }
};

const isOneOrTwo = (restartNum) => {
  return restartNum === '1' || restartNum === '2';
};

const validateRestartNumber = (restartNumber) => {
  if (!isOneOrTwo(restartNumber)) {
    throw new Error(MESSAGES.ERROR.OUT_OF_RESTART_NUMBER_RANGE);
  }
};

export { validateInputNumber, validateRestartNumber };
