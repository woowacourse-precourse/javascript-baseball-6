import { MissionUtils } from "@woowacourse/mission-utils";
import consoleView from "../util/consoleControll.js";
import { RETRY, EXIT } from "../constants/number.js";
import { checkRetry } from "../util/inputValidation.js";
import { INPUT_MESSAGE } from "../constants/message.js";

export default async function restartGame() {
  const userInput = await MissionUtils.Console.readLineAsync(
    INPUT_MESSAGE.RETRY
  );
  checkRetry(userInput);
  if (userInput === RETRY) {
    return true;
  } else if (userInput === EXIT) {
    return false;
  }
}
