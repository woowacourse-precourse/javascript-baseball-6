import { ERROR_MSG } from "./Messages";

export function userInputValid(USER_INPUT) {
  let isDuple = new Set(USER_INPUT).size;
  if (USER_INPUT.length !== 3) {
    throw new Error(ERROR_MSG.INPUT_ERROR_LEN);
  } else if (isDuple !== 3) {
    throw new Error(ERROR_MSG.INPUT_ERROR_DUPLE);
  } else if (Number.isInteger(parseInt(USER_INPUT)) == false) {
    throw new Error(ERROR_MSG.INPUT_ERROR_NOT_NUM);
  }
}
