import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from '../constants/constants.js';
import Computer from './Computer.js';

class Baseball {
  constructor() {
    this.player = {
      computer: [],
      user: [],
    };

    Console.print(GAME_MESSAGE.GAME_START);
  }

  startGame() {
    const computer = new Computer();
    this.player.computer = computer.getNumber();
  }
}

export default Baseball;
