import { MissionUtils } from "@woowacourse/mission-utils";
import randomNumbers from "./RandomNumberGenerator.js";

async function GameRestartPrompter(RESULT, GameValues, baseball, errorTexts) {
  if (RESULT) {
    const NEW_GAME_OR_STOP = await MissionUtils.Console.readLineAsync(
      GameValues.gameWinMsg
    );
    if (NEW_GAME_OR_STOP == GameValues.reStartGame) {
      baseball.Numbers = randomNumbers(
        GameValues.ballSize,
        GameValues.ballMinSize,
        GameValues.ballMaxSize
      );
      return true;
    } else if (NEW_GAME_OR_STOP != GameValues.stopGame) {
      throw new Error(errorTexts.restartErrorMsg);
    }
    return false;
  }
  return true;
}

export default GameRestartPrompter;
