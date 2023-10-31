import { ERROR_MSG } from "./Messages";

export function userInputValid(user_input) {
  let isDuple = new Set(user_input).size;
  if (user_input.length !== 3) {
    throw new Error(ERROR_MSG.INPUT_ERROR_LEN);
  } else if (isDuple !== 3) {
    throw new Error(ERROR_MSG.INPUT_ERROR_DUPLE);
  } else if (Number.isInteger(parseInt(user_input)) == false) {
    throw new Error(ERROR_MSG.INPUT_ERROR_NOT_NUM);
  }
}
