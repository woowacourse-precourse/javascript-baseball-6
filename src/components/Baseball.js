import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, GAME_MESSAGE } from '../constants/constants.js';
import Computer from './Computer.js';
import User from './User.js';
import counteBall from '../utils/countBall.js';
import printBallCount from '../utils/printBallCount.js';

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

    printBallCount(this.count);
  }

  async restart() {
    const re = await Console.readLineAsync(GAME_MESSAGE.RE_GAME + '\n');

    if (re !== '1' && re !== '2') throw new Error(ERROR_MESSAGE.INPUT_INVALID);
    if (re === '1') this.startGame();
  }
}

export default Baseball;
