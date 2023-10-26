import { INPUT_ERROR_MESSAGE } from "../constants/messages.js";

export const restartValidator = (restartInput) => {
  const regExp = /^[1-2]{1}$/;
  if (!regExp.test(restartInput)) {
    throw new Error(INPUT_ERROR_MESSAGE.RESTART_NUMS_ERR);
  }
};

export const inputValidator = (userGuessInput) => {
  threeNumWithoutZeorValidator(userGuessInput);
  checkDuplicateInput(userGuessInput);
};

const checkDuplicateInput = (userGuessInput) => {
  const overlapReg = /(.)\1+/;
  const differenceReg = /(.)\d\1/;
  if (differenceReg.test(userGuessInput) || overlapReg.test(userGuessInput)) {
    throw new Error(INPUT_ERROR_MESSAGE.DUPLICATE_ERR);
  }
};

const threeNumWithoutZeorValidator = (userGuessInput) => {
  const regExp = /^[1-9]{3}$/;
  if (!regExp.test(userGuessInput)) {
    throw new Error(INPUT_ERROR_MESSAGE.NUM_ERR);
  }
};
