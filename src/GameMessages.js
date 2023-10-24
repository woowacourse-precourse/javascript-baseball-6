import { Console } from '@woowacourse/mission-utils';
import { GAME_START_MESSAGE, GAME_WIN_MESSAGE, GAME_END_MESSAGE, BASEBALL_STRIKE, BASEBALL_BALL, BASEBALL_NOTHING } from './Constants.js';

export default class GameMessages {
  showStartMessage() {
    Console.print(GAME_START_MESSAGE);
  }

  showCountStatus(strike, ball) {
    if (strike === 0 && ball === 0) {
      Console.print(BASEBALL_NOTHING);
    } else {
      const results = [];
      if (ball > 0) results.push(`${ball}${BASEBALL_BALL}`);
      if (strike > 0) results.push(`${strike}${BASEBALL_STRIKE}`);
      Console.print(results.join(' '));
    }
  }
  
  showWinMessage() {
    Console.print(GAME_WIN_MESSAGE);
  }

  async showEndMessage() {
    return await Console.readLineAsync(GAME_END_MESSAGE);
  }
}
