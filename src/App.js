import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';

import Player from './Player.js';
import Refree from './Refree.js';
import Validation from './util/Validation.js';
import { QUIT, RESTART } from './util/constants.js';

const SUCESS = 3;

class App {
  #refree;

  constructor() {
    OutputView.printStart();
  }

  async play() {
    const input = await InputView.getUserNumber();
    Validation.validateBaseballNumber(input);
    this.#refree = new Refree();

    await this.#startGameRound(new Player(input).getPlayerNumber());
  }

  async #startGameRound(playerNumber) {
    const { ball, strike } = this.#refree.judgeBallOrStrike(playerNumber);
    OutputView.printResult(ball, strike);
    await this.#checkSuccess(strike);
  }

  async #checkSuccess(strike) {
    strike === SUCESS ? await this.#confirmGame() : await this.#continueGame();
  }

  async #confirmGame() {
    OutputView.printSuccess();
    const input = await InputView.confirmContinue();
    Validation.validateConfirmNumber(input);

    if (Number(input) === RESTART) await this.play();
    if (Number(input) === QUIT) return;
  }

  async #continueGame() {
    const input = await InputView.getUserNumber();
    Validation.validateBaseballNumber(input);

    await this.#startGameRound(new Player(input).getPlayerNumber());
  }
}

const app = new App();
app.play();

export default App;
