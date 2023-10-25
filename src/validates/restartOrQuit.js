import { QUIT, RESTART } from "../constants/input.js";
import { MESSAGE } from "../constants/message.js";

export const validateOnlyRestartOrQuit = (answer) => {
  if (answer !== RESTART && answer !== QUIT) {
    throw new Error(MESSAGE.ERROR_RESTART_OR_QUIT_INPUT_WRONG);
  }
};
