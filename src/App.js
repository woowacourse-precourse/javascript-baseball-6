import BaseballGame from './BaseballGame.js';
import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './Constant.js';

class App {
  #game;

  constructor() {
    this.#game = new BaseballGame();
  }

  async play() {
    Console.print(MESSAGE.START_GAME);
    await this.#game.gameLoop();
  }
}

export default App;
