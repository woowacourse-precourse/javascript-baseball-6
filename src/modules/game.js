import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_MESSAGE } from "../constants.js";
import generateComputerNum from "./generateComputerNum.js";
import { compareNumber } from "./compareNum.js";

function gameStartMessage() {
  return MissionUtils.Console.print(GAME_MESSAGE.GAME_START_MESSAGE);
}

function baseballGame() {
  const computerNum = generateComputerNum();
  compareNumber(computerNum);
}
baseballGame();

export { gameStartMessage };
