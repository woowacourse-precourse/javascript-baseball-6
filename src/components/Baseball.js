import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, GAME_MESSAGE } from '../constants/constants.js';
import Computer from './Computer.js';
import User from './User.js';
import { BALL_COUNT } from '../constants/constants.js';
import counteBall from '../utils/countBall.js';

class Baseball {
  constructor() {
    /** @type {{computer: number[], user: number[]}} */
    this.player = {
      computer: [],
      user: [],
    };

    /** @type {{ball: number, strike: number}} */
    this.count = {
      ball: 0,
      strike: 0,
    };

    Console.print(GAME_MESSAGE.START_GAME);
  }

  /** 숫자 야구 게임 시작 */
  async startGame() {
    const computer = new Computer();
    this.player.computer = computer.getNumber();

    while (this.count.strike !== 3) {
      const user = new User();
      this.player.user = await user.getNumber();

      this.compareNumber();
    }

    if (this.count.strike === 3) {
      Console.print(GAME_MESSAGE.END_GAME);
      this.restart();
    }
  }

  /** 컴퓨터와 유저의 숫자 비교 */
  compareNumber() {
    this.count = counteBall(this.player);

    this.printBallCount();
  }

  /** 볼 카운트 프린트 */
  printBallCount() {
    const { ball, strike } = this.count;

    if (ball === 0 && strike === 0) Console.print(BALL_COUNT.NOTHING);
    else if (ball !== 0 && strike === 0) Console.print(`${ball}${BALL_COUNT.BALL}`);
    else if (ball === 0 && strike !== 0) Console.print(`${strike}${BALL_COUNT.STRIKE}`);
    else if (ball !== 0 && strike !== 0) Console.print(`${ball}${BALL_COUNT.BALL} ${strike}${BALL_COUNT.STRIKE}`);
  }

  async restart() {
    const re = await Console.readLineAsync(GAME_MESSAGE.RE_GAME + '\n');

    if (re !== '1' && re !== '2') throw new Error(ERROR_MESSAGE.INPUT_INVALID);
    if (re === '1') this.startGame();
  }
}

export default Baseball;
