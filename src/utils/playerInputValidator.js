import { VALIDATION, GAME_CODE } from '../constants/constants';
import { ERROR_MESSAGE } from '../constants/messages';

export const playerNumbersValidator = (input) => {
  isValidNumbers(input);
  isValidLength(input);
  hasDuplicateNumbers(input);
};

export const playerGameCodeValidator = (gameCode) => {
  isValidGameCode(gameCode);
};

export const isValidNumbers = (input) => {
  if (!VALIDATION.regExp.test(input)) {
    throw new Error(ERROR_MESSAGE.invalidNumber);
  }
};

export const isValidLength = (input) => {
  if (input.length !== VALIDATION.maxSize) {
    throw new Error(ERROR_MESSAGE.invalidLength);
  }
};

export const hasDuplicateNumbers = (input) => {
  const inputSet = new Set([...input]);
  if (inputSet.size !== input.length) {
    throw new Error(ERROR_MESSAGE.duplicateNumber);
  }
};

export const isValidGameCode = (gameCode) => {
  if (gameCode !== GAME_CODE.restart && gameCode !== GAME_CODE.finish) {
    throw new Error(ERROR_MESSAGE.invalidGameCode);
  }
};
