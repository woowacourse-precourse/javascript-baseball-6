import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGES } from '../utils/constants.js';

class InputView {
  async readUserInputNumbers() {
    return await Console.readLineAsync(GAME_MESSAGES.inputNumbers);
  }

  async readUserInputCommand() {
    return await Console.readLineAsync(GAME_MESSAGES.inputCommands);
  }
}

export default InputView;
