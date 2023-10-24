import { Console } from '@woowacourse/mission-utils';
import validation from '../validation/validation.js';
import MESSAGE from '../constant/MESSAGE.js';

const {
  checkCorrectMainNumber,
  checkCorrectMainNumbersize,
  checkCorrectMainNumberRange,
  checkDuplicationMainNumber,
  checkOneOrTwo,
} = validation;

const view = {
  async readPlayerNum() {
    const input = await Console.readLineAsync(MESSAGE.num_input);
    try {
      view.mainNumberValidation(input.split('').map(Number));
      return input;
    } catch (e) {
      view.errorHandler(e);
      return 0;
    }
  },

  mainNumberValidation(input) {
    checkCorrectMainNumber(input);
    checkCorrectMainNumbersize(input);
    checkCorrectMainNumberRange(input);
    checkDuplicationMainNumber(input);
  },

  async readRestartEnd() {
    const input = await Console.readLineAsync(MESSAGE.restart);
    try {
      checkOneOrTwo(input);
      return input;
    } catch (e) {
      view.errorHandler(e);
      return 0;
    }
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

  errorHandler(e) {
    Console.print(e.message);
  },

  exit() {
    return 0;
  },
};

export default view;
