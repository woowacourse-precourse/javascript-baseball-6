import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constant/MESSAGE.js';

const outputView = {
  printGameStart() {
    Console.print(`${MESSAGE.game_start}`);
  },

  printBallStrike(ball, strike) {
    const ballPrint = ball + MESSAGE.ball + ' ';
    const strikePrint = strike + MESSAGE.strike;
    Console.print(`${ball === 0 ? '' : ballPrint}${strike === 0 ? '' : strikePrint}`);
  },

  printNothing() {
    Console.print(MESSAGE.nothing);
  },

  printThreeStrike() {
    Console.print(`3${MESSAGE.strike}`);
    Console.print(MESSAGE.gameEnd);
  },

  exit() {
    return 0;
  },
};

export default outputView;
