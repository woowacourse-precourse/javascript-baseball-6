import { ERROR_MESSAGE, RESTART_GAME_NUMBERS, SETTING } from '../../constants/index.js';

const inputValidator = (input) => {
  if (input.length > SETTING.NUMBER_OF_INPUT) {
    throw new Error(ERROR_MESSAGE.INVAILD_INPUT_LENGTH_MESSAGE);
  }
  for (const element of input) {
    if (typeof element !== 'number' || isNaN(element)) {
      throw new Error(ERROR_MESSAGE.INVALID_ELEMENT_TYPE_MESSAGE);
    }
  }
  if (input.length !== new Set(input).size) {
    throw new Error(ERROR_MESSAGE.DUPLICATE_ELEMENTS_MESSAGE);
  }
  return input;
};

const playAgainInputValidator = (input) => {
  if (input !== RESTART_GAME_NUMBERS.RESTART && input !== RESTART_GAME_NUMBERS.END) {
    throw new Error(ERROR_MESSAGE.INVALID_RESTART_MESSAGE);
  }
  return input;
};

export { inputValidator, playAgainInputValidator };
