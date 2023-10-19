import { GAME_MESSAGES } from "../utils/constants";
import { readLineAsync } from "../utils/missionUtils";

export default class InputView {
  async readUserInputNumbers() {
    return await readLineAsync(GAME_MESSAGES.INPUT_NUMBER);
  }

  async readUserInputCommand() {
    return await readLineAsync(GAME_MESSAGES.INPUT_NUMBERS);
  }
}
