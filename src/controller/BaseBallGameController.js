import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class BaseBallGameController {
  constructor() {}

  async startGame() {
    OutputView.printStartString();
    const numbers = await InputView.readNumbers();
    const restart = await InputView.readRestart();
  }
}

export default BaseBallGameController;
