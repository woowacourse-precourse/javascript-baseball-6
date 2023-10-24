import { BaseballGame } from './BaseballGame.js';
import { View } from './View/View.js';
import { MESSAGE } from './constants/message.js';
import { GAME_RESULT, WINNING_CONDITION } from './constants/baseballGame.js';

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
    const userNumber = await this.#view.readUserNumber();
    const { strike, ball } = this.#game.compareNumber(userNumber);

    this.#printResult({ strike, ball });

    if (strike !== WINNING_CONDITION.THREE_STRIKE) return this.#guessNumber();

    this.#view.print(GAME_RESULT.WIN(strike));
    this.#readRestart();
  }

  #printResult({ strike, ball }) {
    this.#view.printGameResult({ strike, ball });
  }

  async #readRestart() {
    const restart = await this.#view.readRestart();

    if (restart) return this.play();
  }
}

export default App;

const app = new App();
app.play();
