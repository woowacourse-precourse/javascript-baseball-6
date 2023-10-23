import { BaseballGame } from './BaseballGame.js';
import { View } from './View/View.js';
import { MESSAGE } from './constants/message.js';

class App {
  #game;
  #view = View;

  constructor() {
    this.#view.print(MESSAGE.START_GAME);
  }

  async play() {
    this.#game = new BaseballGame();
    await this.#guessNumber();
  }

  async #guessNumber() {
    while (true) {
      const userNumber = await this.#view.readUserNumber();
      const { strike, ball } = this.#game.guessNumber(userNumber);

      this.#printResult({ strike, ball });

      if (strike === 3) break;
    }
  }

  #printResult({ strike, ball }) {}
}

export default App;

const app = new App();
app.play();
