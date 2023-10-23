import { Console } from '@woowacourse/mission-utils';
import {
  GAME_START_MESSAGE,
  GAME_OVER_MESSAGE,
  GAME_END_INSTRUCTION,
  STRIKE_TEXT,
  BALL_TEXT,
  NOTHING_TEXT
} from './constants/MessageConstants';

export default class GameDisplay {
  showStartMessage() {
    return Console.print(GAME_START_MESSAGE);
  }

  showResult(strike, ball) {
    if (strike === 0 && ball === 0) {
      return Console.print(NOTHING_TEXT);
    }

    const results = [
      ball > 0 ? `${ball}${BALL_TEXT}` : null,
      strike > 0 ? `${strike}${STRIKE_TEXT}` : null
    ]
      .filter(Boolean)
      .join(' ');

    return Console.print(results);
  }

  showWinMessage() {
    return Console.print(GAME_OVER_MESSAGE);
  }

  async showEndMessage() {
    return await Console.readLineAsync(GAME_END_INSTRUCTION);
  }
}
