import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_MESSAGE } from "../constants.js";

function getUserInput() {
  try {
    MissionUtils.Console.readLineAsync(GAME_MESSAGE.USER_INPUT_MESSAGE);
  } catch (error) {
    console.log("에러", error);
  }
}

export { getUserInput };
