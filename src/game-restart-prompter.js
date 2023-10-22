import { MissionUtils } from "@woowacourse/mission-utils";
import randomNumbers from "./random-number-generator.js";

async function GameRestartPrompter(RESULT, gameSettings, baseball, errorTexts) {
  if (RESULT) {
    const NEW_GAME_OR_STOP = await MissionUtils.Console.readLineAsync(
      gameSettings.gameWinMsg
    );
    if (NEW_GAME_OR_STOP == gameSettings.reStartGame) {
      baseball.Numbers = randomNumbers(
        gameSettings.ballLength,
        gameSettings.ballMinSize,
        gameSettings.ballMaxSize
      );
      return true;
    } else if (NEW_GAME_OR_STOP != gameSettings.stopGame) {
      throw new Error(errorTexts.restartErrorMsg);
    }
    return false;
  }
  return true;
}

export default GameRestartPrompter;
