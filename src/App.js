import { Console } from '@woowacourse/mission-utils';
import Game from './Game.js';

class App {
  #game;

  constructor() {
    this.#game = new Game();
  }

  async play() {
    return this.#game.startGame();
  }
}

const app = new App();
app.play();

export default App;
