import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, GAME_MESSAGE } from '../constants/constants.js';
import Computer from './Computer.js';
import User from './User.js';
import printBallCount from '../utils/printBallCount.js';
import countBall from '../utils/countBall.js';

class Baseball {
  constructor() {
    Console.print(GAME_MESSAGE.START_GAME);
  }

  setup() {
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
  }

  /** 숫자 야구 게임 시작 */
  async startGame() {
    this.setup();
    this.player.computer = new Computer().getNumber();

    while (this.count.strike !== 3) {
      this.player.user = await new User().getNumber();
      this.compareNumber();
    }

    if (this.count.strike === 3) {
      Console.print(GAME_MESSAGE.END_GAME);
      this.restart();
    }
  }

  /** 컴퓨터와 유저의 숫자 비교 */
  compareNumber() {
    console.log(this);
    this.count = countBall(this.player);
    printBallCount(this.count);
  }

  /** 게임 재시작 */
  async restart() {
    /** @type {string} */
    const re = await Console.readLineAsync(GAME_MESSAGE.RE_GAME + '\n');
    this.validateRestart(re);

    if (re === GAME_MESSAGE.RESTART) this.startGame();
  }

  validateRestart(re) {
    if (re !== GAME_MESSAGE.RESTART && re !== GAME_MESSAGE.END) throw new Error(ERROR_MESSAGE.INPUT_INVALID);
  }
}

export default Baseball;
