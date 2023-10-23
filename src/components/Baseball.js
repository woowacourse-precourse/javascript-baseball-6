import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from '../constants/constants.js';
import Computer from './Computer.js';
import User from './User.js';
import Hint from './Hint.js';
import { validateRestart } from '../utils/validate.js';

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

    /** 컴퓨터(상대) 숫자 */
    this.player.computer = new Computer().getNumber();

    while (!this.isClear) {
      /** 유저 숫자 */
      this.player.user = await new User().getNumber();

      /** 비교 후 힌트 출력, 게임클리어 여부 리턴 */
      this.isClear = new Hint(this.player).checkBaseballWin();
    }

    /** 게임 재시작 */
    if (this.isClear) this.restart();
  }

  /** 게임 재시작 */
  async restart() {
    /** @type {string} */
    const re = await Console.readLineAsync(GAME_MESSAGE.RE_GAME + '\n');
    validateRestart(re);

    if (re === GAME_MESSAGE.RESTART) this.startGame();
  }
}

export default Baseball;
