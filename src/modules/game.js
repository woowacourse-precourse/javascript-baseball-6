import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_MESSAGE } from "../constants.js";
import generateComputerNum from "./generateComputerNum.js";
import { compareNumber } from "./compareNum.js";
import { getRetryInput } from "./getUserInput.js";

function gameStartMessage() {
  return MissionUtils.Console.print(GAME_MESSAGE.GAME_START_MESSAGE);
}

async function retryGame() {
    const retryInput = await getRetryInput();
    if (retryInput === '1'){
        return baseballGame();
    }
    return;
}

async function baseballGame() {
  const computerNum = generateComputerNum();
  await compareNumber(computerNum);
  retryGame();
}
baseballGame();
// retryGame();

export { gameStartMessage, baseballGame };
