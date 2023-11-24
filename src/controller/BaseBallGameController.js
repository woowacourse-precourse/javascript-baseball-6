import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class BaseBallGameController {
  constructor() {}

  async startGame() {
    OutputView.printStartString();
    const inputNumbers = await InputView.readNumbers();
  }
}

export default BaseBallGameController;
