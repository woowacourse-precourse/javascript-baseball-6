import { Console } from '@woowacourse/mission-utils';
import Computer from './Computer.js';
import User from './User.js';
import { MESSAGES } from './messages.js';

class BaseBallGame {
  constructor() {
    Console.print(MESSAGES.START);
    this.computer = new Computer();
    this.user = new User();
  }

  async start() {
    this.computer.createRandomNumber();
    await this.playBaseBallGame();
  }

  async playBaseBallGame() {
    await this.user.getUserNumber();
  }
}

export default BaseBallGame;
