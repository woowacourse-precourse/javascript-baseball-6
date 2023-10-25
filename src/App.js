import { BaseballGame } from './BaseballGame.js';
import { View } from './View/View.js';
import { WINNING_CONDITION } from './constants/baseballGame.js';

class App {
  #game;
  #view = View;
  #win = false;

  constructor() {
    this.#view.printGameStart();
  }

  #setConfig() {
    this.#game = new BaseballGame();
    this.#win = false;
  }

  async play() {
    do {
      this.#setConfig();
      await this.#startGuess();
    } while (await this.#view.readRestart());
  }

  async #startGuess() {
    while (!this.#win) {
      const { strike, ball } = await this.#guessNumber();

      this.#win = this.#checkWin({ strike, ball });
    }
  }

  async #guessNumber() {
    const userNumber = await this.#view.readUserNumber();

    return this.#game.compareNumber(userNumber);
  }

  #checkWin({ strike, ball }) {
    this.#view.printGameResult({ strike, ball });

    if (strike !== WINNING_CONDITION.THREE_STRIKE) return false;

    this.#view.printGameWinning(strike);

    return true;
  }
}

new App().play();

export default App;
