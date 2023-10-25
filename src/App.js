import { Console } from '@woowacourse/mission-utils';
import { GUIDE_MESSAGE } from '../constants/index.js';
import Player from './Player.js';

class App {
  #player = new Player();

  async play() {
    Console.print(GUIDE_MESSAGE.START);
    await this.#player.startGame();
  }
}

const app = new App();
app.play();

export default App;
