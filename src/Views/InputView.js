import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_MESSAGES } from "../utils/constants.js";

export default class InputView {
  async readUserInputNumbers() {
    return await MissionUtils.Console.readLineAsync(GAME_MESSAGES.inputNumbers);
  }

  async readUserInputCommand() {
    return await MissionUtils.Console.readLineAsync(
      GAME_MESSAGES.inputCommands
    );
  }
}
