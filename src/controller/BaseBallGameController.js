import OutputView from '../view/OutputView.js';

class BaseBallGameController {
  constructor() {}

  startGame() {
    OutputView.printStartString();
  }
}

export default BaseBallGameController;
