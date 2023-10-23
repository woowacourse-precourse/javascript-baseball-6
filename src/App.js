import BaseballGame from './BaseballGame.js';
import { Console } from '@woowacourse/mission-utils';
import { CONSTANT, ERROR, MESSAGE, RESULT } from './Constant.js';
import Validator from './Validator.js';

class App {
  #game;

  constructor() {
    this.#game = new BaseballGame();
  }

  async play() {
    Console.print(MESSAGE.START_GAME);
    await this.#gameLoop();
  }
}

const app = new App();
app.play();

export default App;
