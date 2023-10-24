import { Console } from '@woowacourse/mission-utils';
import { InputView } from './InputView.js';
import { MESSAGE } from '../constants/message.js';
import { COMMAND, GAME_RESULT } from '../constants/baseballGame.js';
import { CustomError } from '../Model/Error.js';

export const View = {
  async readUserNumber() {
    return await InputView.readLineAsync(MESSAGE.READ.USER_NUMBER);
  },

  async readRestart() {
    const userInput = await InputView.readLineAsync(MESSAGE.READ.RESTART);

    if (userInput === COMMAND.RESTART) return true;
    if (userInput === COMMAND.END) return false;

    throw new CustomError(MESSAGE.ERROR.INVALID_TYPE);
  },

  printGameResult(result) {
    Console.print(getResultMessage(result));
  },

  printGameWinning(strike) {
    Console.print(GAME_RESULT.WIN(strike));
  },

  printGameStart() {
    Console.print(MESSAGE.START_GAME);
  },
};

const getResultMessage = ({ strike, ball }) => {
  if (strike === 0 && ball === 0) return GAME_RESULT.NOTHING;

  return [ball && GAME_RESULT.BALL(ball), strike && GAME_RESULT.STRIKE(strike)]
    .filter(Boolean)
    .join(' ');
};
