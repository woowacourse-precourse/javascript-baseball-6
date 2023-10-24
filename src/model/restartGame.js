import ConsoleView from "../util/ConsoleControll.js";
import { RETRY, EXIT } from "../constants/number.js";

export default async function restartGame() {
  const userInput = await ConsoleView.readRetry();
  if (userInput === RETRY) {
    return true;
  } else if (userInput === EXIT) {
    return false;
  }
}
