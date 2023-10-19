import {
  NUMBER_ERROR,
  DUPLICATION_ERROR,
  LENGTH_ERROR,
} from "../constants/error-message";

function isLengthError(userNumbers) {
  if (userNumbers.length !== 3) throw new Error(LENGTH_ERROR);
  return false;
}

function isDuplicationError(userNumbers) {
  for (let i = 0; i < userNumbers.length; i++) {
    if (userNumbers.substring(i + 1).includes(userNumbers[i])) {
      throw new Error(DUPLICATION_ERROR);
    }
  }
  return false;
}

function isNumberError(userNumbers) {
  for (let i = 0; i < userNumbers.length; i++) {
    if (!(userNumbers[i] >= "0" && userNumbers[i] <= "9")) {
      throw new Error(NUMBER_ERROR);
    }
  }
  return false;
}

function validateUserNumbers(userNumbers) {
  isLengthError(userNumbers);
  isDuplicationError(userNumbers);
  isNumberError(userNumbers);
}

export {
  isLengthError,
  isDuplicationError,
  isNumberError,
  validateUserNumbers,
};
