import consoleView from "../util/consoleControll.js";
import { RETRY, EXIT } from "../constants/number.js";
import { checkRetry } from "../util/inputValidation.js";

export default async function restartGame() {
  const userInput = await consoleView.readRetry();
  checkRetry(userInput);
  if (userInput === RETRY) {
    return true;
  } else if (userInput === EXIT) {
    return false;
  }
}
