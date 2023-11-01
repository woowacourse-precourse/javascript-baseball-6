import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constant/MESSAGE.js';
import { CONSTANT } from '../constant/CONSTANT.js';

const outputView = {
  printGameStart() {
    Console.print(`${MESSAGE.game_start}`);
  },

  printBallStrike(ball, strike) {
    const ballPrint = ball + MESSAGE.ball + CONSTANT.space;
    const strikePrint = strike + MESSAGE.strike;
    Console.print(`${ball === 0 ? '' : ballPrint}${strike === 0 ? '' : strikePrint}`);
  },

  printNothing() {
    Console.print(MESSAGE.nothing);
  },

  printThreeStrike() {
    Console.print(`${CONSTANT.strikeThree}${MESSAGE.strike}`);
    Console.print(MESSAGE.gameEnd);
  },

  exit() {
    return 0;
  },
};

export default outputView;
