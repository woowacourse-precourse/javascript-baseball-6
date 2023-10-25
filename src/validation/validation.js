import { ERROR_MSG } from "../constants/messages.js";
import {
  RESTART_SIGN,
  EXIT_SIGN,
  OUT_OF_RANGE_NUMBER,
  INPUT_LENGTH,
  NUMBER_REGEXP,
} from "../constants/constants.js";

const validation = {
  isNumber(input) {
    if (NUMBER_REGEXP.test(input))
      throw new Error(ERROR_MSG.INVALID_INPUT_TYPE);
    return 0;
  },

  isThree(input) {
    if (input.length !== INPUT_LENGTH)
      throw new Error(ERROR_MSG.INVALID_INPUT_LENGTH);
    return 0;
  },

  isNotDuplicate(input) {
    if (input[0] === input[1] || input[0] === input[2] || input[1] === input[2])
      throw new Error(ERROR_MSG.DUPLICATED_INPUT);
    return 0;
  },

  isInRange(input) {
    if (
      input[0] === OUT_OF_RANGE_NUMBER ||
      input[1] === OUT_OF_RANGE_NUMBER ||
      input[2] === OUT_OF_RANGE_NUMBER
    )
      throw new Erorr(ERROR_MSG.OUT_OF_RANGE);
    return 0;
  },

  inputValidCheck(input) {
    this.isNumber(input);
    this.isThree(input);
    this.isInRange(input);
    this.isNotDuplicate(input);
  },
};

export default validation;
