import { ERROR_MESSAGE, RESTART_GAME_NUMBERS, REGEXP_PTTERN } from "../../constants/index.js";

const inputValidator = (input) => {
  if (!REGEXP_PTTERN.THREE_DIGIT_PATTERN.test(input)) {
    throw new Error(ERROR_MESSAGE.INVAILD_INPUT_MESSAGE);
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
