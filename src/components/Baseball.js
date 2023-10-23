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

    /** @type {{ball: number, strike: number}} */
    this.count = {
      ball: 0,
      strike: 0,
    };

    Console.print(GAME_MESSAGE.GAME_START);
  }

  /** 숫자 야구 게임 시작 */
  async startGame() {
    const computer = new Computer();
    this.player.computer = computer.getNumber();

    const user = new User();
    this.player.user = await user.getNumber();

    this.compareNumber();
  }

  /** 컴퓨터와 유저의 숫자 비교 */
  compareNumber() {
    const { computer, user } = this.player;

    user.forEach((num, idx) => {
      const exist = computer.indexOf(num);
      if (exist === idx) this.count.strike++;
      else if (exist !== idx && exist !== -1) this.count.ball++;
    });
  }
}

export default Baseball;
