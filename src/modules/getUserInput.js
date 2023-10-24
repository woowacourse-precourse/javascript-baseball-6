import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_MESSAGE } from "../constants.js";
import { isValidNum } from "./isValidNum.js";

async function getUserInput() {
  try {
    const userInput = await MissionUtils.Console.readLineAsync(
      GAME_MESSAGE.USER_INPUT_MESSAGE
    );
    if (!isValidNum(userInput)) {
      throw new Error(GAME_MESSAGE.ERROR_MESSAGE);
    }
    return userInput;
  } catch (error) {
    throw new Error(GAME_MESSAGE.ERROR_MESSAGE);
  }
}

export { getUserInput };
