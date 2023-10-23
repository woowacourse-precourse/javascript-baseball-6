import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';

import Opponent from './Opponent.js';
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
    this.checkError(Validation.validateBaseballNumber, inputNumber);

    const player = new Player(inputNumber);
    const opponent = new Opponent();

    this.#refree = new Refree(player.numberArray, opponent.opponentNumber);
    this.startGame();
  }

  startGame() {
    const { ball, strike } = this.#refree.playGame();
    OutputView.printResult(ball, strike);
    this.checkSuccess(strike);
  }

  checkSuccess(strike) {
    strike === 3 ? this.confirmGame() : this.continueGame();
  }

  async confirmGame() {
    OutputView.printDone();
    const inputNumber = await InputView.confirmContinue();
    this.checkError(Validation.validateConfirmNumber, inputNumber);

    if (Number(inputNumber) === 1) this.play();
    if (Number(inputNumber) === 2) return;
  }

  async continueGame() {
    const inputNumber = await InputView.getUserNumber();
    this.checkError(Validation.validateBaseballNumber, inputNumber);
    this.#refree.changePlayerNumber(inputNumber);
    this.startGame();
  }

  checkError(handler, input) {
    try {
      handler(input);
    } catch (error) {
      throw new Error(`[ERROR] ${error}`);
    }
  }
}

const app = new App();
app.play();

export default App;
