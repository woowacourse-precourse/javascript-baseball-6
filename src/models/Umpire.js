import Pitcher from './Pitcher.js';
import Catcher from './Catcher.js';
import {GameMessages} from '../GameMessages.js';
import {Console} from '@woowacourse/mission-utils';

class Umpire {
  static BALL_COUNT = 3;
  static MIN_COUNT = 1;
  static MAX_COUNT = 9;

  getGameResult(inputPitcherNumbers, inputCatcherNumbers) {
    const {ball, strike} = this.getResultOfJudgment(inputPitcherNumbers, inputCatcherNumbers);
    const countResult =
      [
        [ball, GameMessages.GAME_RESULT_BALL],
        [strike, GameMessages.GAME_RESULT_STRIKE],
      ]
        .filter(([count]) => count > 0)
        .map(([count, gameJudgment]) => `${count}${gameJudgment}`)
        .join(' ') || GameMessages.GAME_RESULT_NOTHING;

    Console.print(countResult);

    if (strike === Umpire.BALL_COUNT) {
      Console.print(GameMessages.GAME_RESULT_EXIT);
      return true;
    }
    return false;
  }

  getResultOfJudgment(inputPitcherNumbers, inputCatcherNumbers) {
    return {
      strike: this.countStrike(inputPitcherNumbers, inputCatcherNumbers),
      ball: this.countBall(inputPitcherNumbers, inputCatcherNumbers),
    };
  }

  countStrike(pitcher, catcher) {
    return pitcher.reduce((count, number, index) => count + (catcher[index] === number ? 1 : 0), 0);
  }

  countBall(pitcher, catcher) {
    return pitcher.reduce(
      (count, number, index) =>
        count + (catcher[index] !== number && catcher.includes(number) ? 1 : 0),
      0,
    );
  }
}

export default Umpire;

