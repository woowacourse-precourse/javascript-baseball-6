import { ERROR_MESSAGE, PLAYER_NUMBER_RANGE, QUIT, RESTART } from './constants.js';

const Validation = {
  validateBaseballNumber(input) {
    if (input.length !== PLAYER_NUMBER_RANGE) {
      throw new Error(ERROR_MESSAGE.inValidPlayerNumberLength);
    }

    if (input.match(/([1-9])/g)?.length !== PLAYER_NUMBER_RANGE) {
      throw new Error(ERROR_MESSAGE.inValidPlayerNumberLange);
    }

    if (new Set([...input]).size < PLAYER_NUMBER_RANGE) {
      throw new Error(ERROR_MESSAGE.duplicatePlayerNumber);
    }
  },

  validateConfirmNumber(input) {
    if (Number(input) !== RESTART && Number(input) !== QUIT) {
      throw new Error(ERROR_MESSAGE.inValidConfirmNumber);
    }
  },
};

export default Validation;
