import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';

import Opponent from './Opponent.js';
import Player from './Player.js';
import Refree from './Refree.js';

class App {
  #refree;

  async play() {
    OutputView.printStart();

    const inputNumber = await InputView.getUserNumber();
    const player = new Player(inputNumber);
    const opponent = new Opponent();

    this.#refree = new Refree(player.userNumberArray, opponent.makeRandomNumber());
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
    const input = await InputView.confirmContinue();

    if (parseInt(input) === 1) this.play();
    else if (parseInt(input) === 2) return;
    else throw Error('1 또는 2를 입력해주세요.');
  }
}

const app = new App();
app.play();

export default App;
