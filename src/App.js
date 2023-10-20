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
  }
}

const app = new App();
app.play();

export default App;
