import { GAME_RULES, ERRORS } from "../constants/Constants.js";

const InputValidator = {
  validateInput(input) {
    if (!GAME_RULES.NUMBER_REGEX.test(input)) {
      throw new Error(ERRORS.NOT_NUMBER);
    }

    if (input.length !== GAME_RULES.LIMIT_LENGTH) {
      throw new Error(ERRORS.OUT_OF_RANGE_LENGTH);
    }

    if (
      [...input].some(
        (value) =>
          Number(value) < GAME_RULES.MIN_NUMBER ||
          Number(value) > GAME_RULES.MAX_NUMBER
      )
    ) {
      throw new Error(ERRORS.OUT_OF_RANGE_NUMBER);
    }

    if (new Set(input).size !== input.length) {
      throw new Error(ERRORS.DUPLICATE_NUMBER);
    }
  },

  validateRestartInput(input) {
    if (input !== "1" && input !== "2") {
      throw new Error(ERRORS.INVALID_RESTART_INPUT);
    }
  },
};

export default InputValidator;
