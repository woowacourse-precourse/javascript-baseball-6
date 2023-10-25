import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_MESSAGE, RESTART_MANAGER_ERROR_MESSAGE } from "../Constants.js";

class RestartManager {
  static async askForRestart() {
    await MissionUtils.Console.print(GAME_MESSAGE.RESTART);
    const restartInput = await MissionUtils.Console.readLineAsync(
      GAME_MESSAGE.RESTART_INPUT
    );

    switch (restartInput.trim()) {
      case "1":
        return true;
      case "2":
        MissionUtils.Console.print(GAME_MESSAGE.END_GAME);
        return false;
      default:
        throw new Error(RESTART_MANAGER_ERROR_MESSAGE.INPUT);
    }
  }
}

export default RestartManager;
