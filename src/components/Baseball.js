import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, GAME_MESSAGE } from '../constants/constants.js';
import Computer from './Computer.js';
import User from './User.js';
import Hint from './Hint.js';

class Baseball {
  constructor() {
    /** @type {{computer: number[], user: number[]}} */
    this.player = {
      computer: [],
      user: [],
    };

    /** @type {boolean} */
    this.isClear;

    Console.print(GAME_MESSAGE.START_GAME);
  }

  /** 숫자 야구 게임 시작 */
  async startGame() {
    this.isClear = false;

    this.player.computer = new Computer().getNumber();

    while (!this.isClear) {
      this.player.user = await new User().getNumber();

      this.isClear = new Hint(this.player).checkBaseballWin();
    }

    if (this.isClear) this.restart();
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
