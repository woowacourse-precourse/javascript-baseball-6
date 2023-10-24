import { BaseballGame } from './BaseballGame.js';
import { View } from './View/View.js';
import { WINNING_CONDITION } from './constants/baseballGame.js';

class App {
  #game;
  #view = View;

  constructor() {
    this.#view.printGameStart();
  }

  async play() {
    this.#game = new BaseballGame();

    await this.#guessNumber();
    await this.#readRestart();
  }

  async #guessNumber() {
    const userNumber = await this.#view.readUserNumber();
    const result = this.#game.compareNumber(userNumber);

    this.#checkResult(result);
  }

  async #checkResult({ strike, ball }) {
    this.#view.printGameResult({ strike, ball });

    if (strike === WINNING_CONDITION.THREE_STRIKE)
      return this.#view.printGameWinning(strike);

    await this.#guessNumber();
  }

  async #readRestart() {
    const restart = await this.#view.readRestart();

    if (restart) this.play();
  }
}

export default App;

const app = new App();
app.play();
