import { Console } from '@woowacourse/mission-utils';
import MainValidation from '../validation/MainValidation.js';
import RestartValidation from '../validation/RestartValidation.js';
import MESSAGE from '../constant/MESSAGE.js';

const view = {
  async readPlayerNum() {
    const input = await Console.readLineAsync(MESSAGE.num_input);
    new MainValidation(input.split('').map(Number));
    return input;
  },

  async readRestartEnd() {
    const input = await Console.readLineAsync(MESSAGE.restart);
    new RestartValidation(input);
    return input;
  },

  printGameStart() {
    Console.print(`${MESSAGE.game_start}`);
  },

  printBallStrike(ball, strike) {
    Console.print(`${ball}${MESSAGE.ball} ${strike}${MESSAGE.strike}`);
  },

  printBall(ball) {
    Console.print(`${ball}${MESSAGE.ball}`);
  },

  printStrike(strike) {
    Console.print(`${strike}${MESSAGE.strike}`);
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

export default view;
