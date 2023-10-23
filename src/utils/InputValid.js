import { ERROR } from "../Asset/Sentence";

const InputValid = {
  readUserInput(input) {
    // input 은 string
    const inputNumbers = input.split(""); // array
    if (input.length !== 3) {
      throw new Error(ERROR.INPUT_NUMSIZE_ERROR);
    }
    if (!input.match(/[1-9]/g)) {
      throw new Error(ERROR.INPUT_TYPE_ERROR);
    }
    if (inputNumbers.length !== new Set(inputNumbers).size) {
      throw new Error(ERROR.INPUT_SAMENUM_ERROR);
    }
    if (inputNumbers.includes("0")) {
      throw new Error(ERROR.INPUT_ZERO_ERROR);
    }
  },

  readRestartInput(input) {
    // string
    if (input.length !== 1) {
      throw new Error(ERROR.INPUT_RESTARTNUM_LEN_ERROR);
    }
    if (!input.match(/1|2/g)) {
      throw new Error(ERROR.INPUT_RESTARTNUM_ERROR);
    }
  },
};

export default InputValid;
