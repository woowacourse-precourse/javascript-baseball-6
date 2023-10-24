import { ERROR } from "./env/Message.js";

export default function Validation() {
  this.InputValueLengthValidation = (value) => {
    if (value.length !== 3) {
      throw new Error(ERROR.INVALID_LENGTH);
    }
  };

  this.InputValueDuplicatedValidation = (value) => {
    const set = new Set(value);
    if (set.size !== 3) {
      throw new Error(ERROR.INVALID_DUPLICATE);
    }
  };

  this.InputValueTypeOfValidation = (value) => {
    if (isNaN(value)) {
      throw new Error(ERROR.INVALID_INPUT);
    }
  };

  this.InputRestartValueValidation = (value) => {
    if (value !== "1" && value !== "2") {
      throw new Error(ERROR.INVALID_RESTART);
    }
  };
}
