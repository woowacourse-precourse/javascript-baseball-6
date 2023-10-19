import {
  NUMBER_ERROR,
  DUPLICATION_ERROR,
  LENGTH_ERROR,
  INVALID_INPUT_ERROR,
} from "../constants/error-message.js";
import { GAME_RESTART, GAME_EXIT } from "../constants/game-control.js";

function isLengthError(userInputNumber) {
  if (userInputNumber.length !== 3) throw new Error(LENGTH_ERROR);
  return false;
}

function isDuplicationError(userInputNumber) {
  for (let i = 0; i < userInputNumber.length; i++) {
    if (userInputNumber.substring(i + 1).includes(userInputNumber[i])) {
      throw new Error(DUPLICATION_ERROR);
    }
  }
  return false;
}

function isNumberError(userInputNumber) {
  for (let i = 0; i < userInputNumber.length; i++) {
    if (!(userInputNumber[i] >= "0" && userInputNumber[i] <= "9")) {
      throw new Error(NUMBER_ERROR);
    }
  }
  return false;
}

function validateUserInputNumber(userInputNumber) {
  isLengthError(userInputNumber);
  isDuplicationError(userInputNumber);
  isNumberError(userInputNumber);
}

function validateUserSelectNumber(userSelectNumber) {
  if (userSelectNumber !== GAME_RESTART && userSelectNumber !== GAME_EXIT) {
    throw new Error(INVALID_INPUT_ERROR);
  }
  return false;
}

export {
  isLengthError,
  isDuplicationError,
  isNumberError,
  validateUserInputNumber,
  validateUserSelectNumber,
};
