import { GAME_MESSAGES } from "../utils/constants.js";
import { readLineAsync } from "../utils/missionUtils.js";

export default class InputView {
  async readUserInputNumbers() {
    return await readLineAsync(GAME_MESSAGES.INPUT_NUMBERS);
  }

  async readUserInputCommand() {
    return await readLineAsync(GAME_MESSAGES.INPUT_COMMAND);
  }
}
