import { ERROR_MESSAGE, INTERFACE } from "../constants.js";

const VALIDATION_CONDITIONS = {
  NOT_NUMBER: (input) => Number.isNaN(parseInt(input)),
  OVER_OR_UNDER_LIMIT: (input) => input.length !== 3,
  DUPLICATED: (inputArray) =>
    inputArray.findIndex(
      (item) => inputArray.indexOf(item) !== inputArray.lastIndexOf(item)
    ) !== -1,
  UNDEFINED: (input) => input !== INTERFACE.REPLAY && input !== INTERFACE.EXIT,
};

export const validation = {
  validatePlayNumber(input) {
    const inputArray = input.split("");
    const { NOT_NUMBER, OVER_OR_UNDER_LIMIT, DUPLICATED } = ERROR_MESSAGE;
    if (VALIDATION_CONDITIONS.NOT_NUMBER(input)) {
      throw new Error(
        `[ERROR] ${NOT_NUMBER} 서로 다른 3 자리 의 숫자를 입력해주세요.`
      );
    }
    if (VALIDATION_CONDITIONS.OVER_OR_UNDER_LIMIT(input)) {
      throw new Error(
        `[ERROR] ${OVER_OR_UNDER_LIMIT} 서로 다른 3 자리 의 숫자를 입력해주세요.`
      );
    }
    if (VALIDATION_CONDITIONS.DUPLICATED(inputArray)) {
      throw new Error(
        `[ERROR] ${DUPLICATED} 서로 다른 3 자리 의 숫자를 입력해주세요.`
      );
    }
  },

  validateSelectReplayOrExit(input) {
    if (VALIDATION_CONDITIONS.UNDEFINED(input)) {
      throw new Error(ERROR_MESSAGE.UNDEFINED);
    }
  },
};
