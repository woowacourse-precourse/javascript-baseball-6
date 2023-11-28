import Hint from '../domain/Hint.js';
import generateRandomNumbers from '../utils/generateRandomNumbers.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class BaseballGameController {
  constructor() {}

  async startGame() {
    OutputView.printStartString();
    const numbers = await InputView.readNumbers();
    const restart = await InputView.readRestart();
    const computerNumbers = generateRandomNumbers();
    const hint = new Hint(numbers, computerNumbers);
  }
}

export default BaseballGameController;
