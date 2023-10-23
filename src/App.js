import { Console } from '@woowacourse/mission-utils';
import { GUIDE_MESSAGES } from '../constants/index.js';
import Player from './player/index.js';

class App {
  #player = new Player();

  async play() {
    Console.print(GUIDE_MESSAGES.START);
    await this.#player.startGame();
  }
}

export default App;
