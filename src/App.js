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

    this.#refree = new Refree(player.userNumber, opponent.makeRandomNumber());
  }
}

const app = new App();
app.play();

export default App;
