import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from '../constants/constants.js';
import Computer from './Computer.js';
import User from './User.js';
import { BALL_COUNT } from '../constants/constants.js';

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

    while (this.count.strike !== 3) {
      const user = new User();
      this.player.user = await user.getNumber();

      this.compareNumber();
    }

    if (this.count.strike === 3) {
      Console.print(GAME_MESSAGE.END_GAME);
    }
  }

  /** 컴퓨터와 유저의 숫자 비교 */
  compareNumber() {
    const { computer, user } = this.player;
    let ball = 0;
    let strike = 0;

    user.forEach((num, idx) => {
      const exist = computer.indexOf(num);
      if (exist === idx) strike++;
      else if (exist !== idx && exist !== -1) ball++;
    });

    this.count = { ball, strike };

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
}

export default Baseball;
