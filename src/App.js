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

    const playerNumber = new Player(inputNumber).numberArray;
    const opponentNumber = new Opponent().opponentNumber;

    this.#refree = new Refree(playerNumber, opponentNumber);
    await this.startGame();
  }

  async startGame() {
    const { ball, strike } = this.#refree.playGame();
    OutputView.printResult(ball, strike);
    await this.checkSuccess(strike);
  }

  async checkSuccess(strike) {
    strike === 3 ? this.confirmGame() : await this.continueGame();
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
