import { Console } from '@woowacourse/mission-utils';
import MESSAGE from './constants/messages.js';
import GameController from './controller/gameController.js';

class App {
  #game = new GameController();

  constructor() {}

  async play() {
    await this.#game.startGame();
  }
}

const game = new App();
game.play();

export default App;
