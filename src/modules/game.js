import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_MESSAGE } from "../constants.js";

function gameStartMessage() {
  return MissionUtils.Console.print(GAME_MESSAGE.GAME_START_MESSAGE);
}

export { gameStartMessage };
