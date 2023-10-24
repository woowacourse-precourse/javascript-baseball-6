import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/message.js';
import { validateBaseballNumber } from '../utils/validation.js';
import { WINNING_CONDITION, GAME_RESULT } from '../constants/baseballGame.js';

export const View = {
  async readUserNumber() {
    const userNumber = await Console.readLineAsync(MESSAGE.READ.USER_NUMBER);
    const numberList = userNumber.split('');

    validateBaseballNumber(numberList);

    return numberList.map(Number);
  },

  print(message) {
    Console.print(message);
  },

  printGameResult({ strike, ball }) {
    this.print(getResultMessage({ strike, ball }));
  },
};

const getResultMessage = ({ strike, ball }) => {
  if (strike === WINNING_CONDITION.THREE_STRIKE) {
    return GAME_RESULT.WIN(strike);
  }

  if (strike === 0 && ball === 0) return GAME_RESULT.NOTHING;

  return [ball && GAME_RESULT.BALL(ball), strike && GAME_RESULT.STRIKE(strike)]
    .filter(Boolean)
    .join(' ');
};
