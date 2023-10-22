import { OUTPUT_MESSAGES } from '../constants/Messages.js';
import OutputView from './OutputView.js';
import Validators from '../../utils/validator/index.js';
import InputView from './InputView.js';

const View = {
  print(message) {
    OutputView.print(message);
  },

  printStart() {
    OutputView.print(OUTPUT_MESSAGES.GAME_START);
  },

  printSuccess() {
    OutputView.print(OUTPUT_MESSAGES.GAME_SUCCESS);
  },

  async readGameNumbers() {
    const userNumbers = await InputView.readLineAsync(OUTPUT_MESSAGES.GAME_NUMBER);
    Validators.checkGameNumbers(userNumbers);
    return userNumbers;
  },

  async readGameCommand() {
    const userAnswer = await InputView.readLineAsync(OUTPUT_MESSAGES.GAME_COMMAND);
    Validators.checkGameCommand(userAnswer);
    return userAnswer;
  },

  printHint({ ball, strike }) {
    if (ball === 0 && strike === 0) {
      OutputView.print('낫싱');
    } else {
      const message = `${ball}볼 ${strike}스트라이크`;
      const hint = message.replace(/0볼|0스트라이크/g, '').trim();
      OutputView.print(hint);
    }
  },
};

export default View;
