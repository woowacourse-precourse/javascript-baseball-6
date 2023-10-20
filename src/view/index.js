import { OUTPUT_MESSAGES } from '../constants/Messages.js';
import OutputView from './OutputView.js';
import Validators from '../../utils/validator/index.js';
import InputView from './InputView.js';

const View = {
  printStart() {
    OutputView.print(OUTPUT_MESSAGES.GAME_START);
  },

  async readGameNumbers() {
    let userNumbers;
    try {
      userNumbers = await InputView.readLineAsync(OUTPUT_MESSAGES.GAME_NUMBER);
      Validators.checkGameNumbers(userNumbers);
    } catch (error) {
      OutputView.print(error);
    }
    return userNumbers;
  },
};

export default View;
