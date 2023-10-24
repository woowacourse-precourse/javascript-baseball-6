import { Console } from '@woowacourse/mission-utils';
import validation from '../validation/validation.js';

const {
  checkCorrectMainNumber,
  checkCorrectMainNumbersize,
  checkCorrectMainNumberRange,
  checkDuplicationMainNumber,
  checkOneOrTwo,
} = validation;

const MESSAGE = Object.freeze({
  game_start: '숫자 야구 게임을 시작합니다.',
  num_input: '숫자를 입력해주세요 : ',
  ball: '볼',
  strike: '스트라이크',
  nothing: '낫싱',
  gameEnd: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  restart: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
});

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

  errorHandler(error) {
    Console.print(error.message);
  },

  exit() {
    return 0;
  },
};

export default view;
