import { Console } from '@woowacourse/mission-utils';
import { InputView } from './InputView.js';
import { MESSAGE } from '../constants/message.js';
import { COMMAND } from '../constants/baseballGame.js';
import { InputViewError } from '../Model/Error.js';
import { ERROR } from '../constants/error.js';
import { GameResultMessage, getResultMessage } from '../utils/messageUtils.js';

export const View = {
  async readUserNumber() {
    return await InputView.readLineAsync(MESSAGE.READ.USER_NUMBER);
  },

  async readRestart() {
    const userInput = await InputView.readLineAsync(MESSAGE.READ.RESTART);

    if (userInput === COMMAND.RESTART) return true;
    if (userInput === COMMAND.END) return false;

    throw new InputViewError(ERROR.MESSAGE.INVALID_RESTART);
  },

  printGameStart() {
    Console.print(MESSAGE.START_GAME);
  },

  printGameResult(result) {
    Console.print(getResultMessage(result));
  },

  printGameWinning(strike) {
    Console.print(GameResultMessage.formatWin(strike));
  },
};
