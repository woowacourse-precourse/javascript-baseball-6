import { SETTING, MESSAGE } from "../constants/GameConfig.js";

const lengthValidation = (inputNumber) => {
  return inputNumber.length !== SETTING.INPUT_NUMBER_LENGTH;
};

const rangeValidation = (inputNumber) => {
  return isNaN(inputNumber) || inputNumber.toString().includes("0");
};

const duplicateValidation = (inputNumber) => {
  for (let i = 1; i < inputNumber.length; i++) {
    if (inputNumber[i - 1] === inputNumber[i]) {
      return true;
    }
  }
  return false;
};

export const userInputNumberValidation = (inputNumber) => {
  if (
    lengthValidation(inputNumber) ||
    rangeValidation(inputNumber) ||
    duplicateValidation(inputNumber)
  ) {
    throw new Error(MESSAGE.ERROR.WRONG_VALUE);
  }
  return inputNumber.split("").map(Number);
};
