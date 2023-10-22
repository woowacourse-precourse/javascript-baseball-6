import { BaseballGame } from './BaseballGame.js';
import { View } from './View/View.js';
import { MESSAGE } from './constants/message.js';

class App {
  #game;
  #view = View;

  async play() {
    this.#view.print(MESSAGE.START_GAME);

    this.#game = new BaseballGame();
  }
}

export default App;

const app = new App();
app.play();
