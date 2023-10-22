import { GAME_RULES, ERRORS } from "../constants/Constants.js";

const InputValidator = {
  validateInput(input) {
    this.validateNumber(input);
    this.validateLength(input);
    this.validateRange(input);
    this.validateUnique(input);
  },

  validateNumber(input) {
    if (!GAME_RULES.NUMBER_REGEX.test(input)) {
      throw new Error(ERRORS.NOT_NUMBER);
    }
  },

  validateLength(input) {
    if (input.length !== GAME_RULES.LIMIT_LENGTH) {
      throw new Error(ERRORS.OUT_OF_RANGE_LENGTH);
    }
  },

  validateRange(input) {
    if (
      [...input].every(
        (value) =>
          Number(value) < GAME_RULES.MIN_NUMBER ||
          Number(value) > GAME_RULES.MAX_NUMBER
      )
    ) {
      throw new Error(ERRORS.OUT_OF_RANGE_NUMBER);
    }
  },

  validateUnique(input) {
    if (new Set(input).size !== input.length) {
      throw new Error(ERRORS.DUPLICATE_NUMBER);
    }
  },
};

export default InputValidator;
