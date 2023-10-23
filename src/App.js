import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';

import Player from './Player.js';
import Refree from './Refree.js';
import Validation from './Validation.js';

class App {
  #refree;

  constructor() {
    OutputView.printStart();
  }

  async play() {
    const inputNumber = await InputView.getUserNumber();
    Validation.validateBaseballNumber(inputNumber);
    this.#refree = new Refree();

    await this.startGameRound(new Player(inputNumber).numberArray);
  }

  async startGameRound(playerNumber) {
    const { strike, result } = this.#refree.judgeBallOrStrike(playerNumber);
    OutputView.printResult(result);
    await this.checkSuccess(strike);
  }

  async checkSuccess(strike) {
    strike === 3 ? await this.confirmGame() : await this.continueGame();
  }

  async confirmGame() {
    OutputView.printSuccess();
    const inputNumber = await InputView.confirmContinue();
    Validation.validateConfirmNumber(inputNumber);

    if (Number(inputNumber) === 1) await this.play();
    if (Number(inputNumber) === 2) return;
  }

  async continueGame() {
    const inputNumber = await InputView.getUserNumber();
    Validation.validateBaseballNumber(inputNumber);
    await this.startGameRound(new Player(inputNumber).numberArray);
  }
}

const app = new App();
app.play();

export default App;
