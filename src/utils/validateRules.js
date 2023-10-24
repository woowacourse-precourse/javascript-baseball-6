import { RULES } from '../constants/constant.js';

export const isEmptyValue = (userInput) => {
  return userInput === '';
};

export const isNotNumber = (userInput) => {
  return userInput.match(/\D/);
};

export const isNotValidLength = (userInput) => {
  return userInput.length !== RULES.MAX_LENGTH;
};

export const isWithZero = (userInput) => {
  return userInput.match(/0/);
};

export const isNotValidNumberRange = (userInput) => {
  return isWithZero(userInput) || isNotNumber(userInput);
};

export const isDuplicatedNumber = (userInput) => {
  const userInputNumberSet = new Set(userInput);
  return userInputNumberSet.size !== userInput.length;
};
