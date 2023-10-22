import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from '../constants/constants.js';
import Computer from './Computer.js';
import User from './User.js';

class Baseball {
  constructor() {
    /** @type {{computer: number[], user: number[]}} */
    this.player = {
      computer: [],
      user: [],
    };

    Console.print(GAME_MESSAGE.GAME_START);
  }

  /** 숫자 야구 게임 시작 함수 */
  async startGame() {
    const computer = new Computer();
    this.player.computer = computer.getNumber();

    const user = new User();
    this.player.user = await user.getNumber();
  }
}

export default Baseball;
