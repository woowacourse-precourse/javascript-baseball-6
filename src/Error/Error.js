import { ERROR } from "../Constant/Constant";

export default class ErrorHandler {
  checkInput(userInput) {
    if (
      userInput.length !== 3 ||
      new Set(userInput).size !== 3 ||
      [...userInput].some((item) => Number(item) < 1 || Number(item) > 9)
    ) {
      throw new Error(ERROR.INVALID_INPUT);
    }
  }

  checkReplay(replayInput) {
    if (replayInput !== "1" && replayInput !== "2") {
      throw new Error(ERROR.INVALID_REPLAY);
    }
  }
}
