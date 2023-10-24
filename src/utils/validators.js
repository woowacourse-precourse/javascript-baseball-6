import { INPUT_ERROR_MESSAGE } from "../constants/messages";

export const inputValidator = (userGuessInput) => {
  console.log(userGuessInput);
  const regExp = /^[1-9]{3}$/;
  if (!regExp.test(userGuessInput)) {
    throw new Error(INPUT_ERROR_MESSAGE.NUM_ERR);
  }
  const overlapReg = /(.)\1+/;
  if (overlapReg.test(userGuessInput)) {
    throw new Error(INPUT_ERROR_MESSAGE.DUPLICATE_ERR);
  }
  const differenceReg = /(.)\d\1/;
  if (differenceReg.test(userGuessInput)) {
    throw new Error(INPUT_ERROR_MESSAGE.DUPLICATE_ERR);
  }
};

export const restartValidator = (restartInput) => {
  const regExp = /^[1-2]{1}$/;
  if (!regExp.test(restartInput)) {
    throw new Error(INPUT_ERROR_MESSAGE.RESTART_NUMS_ERR);
  }
};
