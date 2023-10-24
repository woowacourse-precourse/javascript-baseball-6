import BaseballModel from '../model/index.js';
import { InputView, OutputView } from '../view/index.js';

class BaseBallController {
  static RETRY = '1';

  constructor() {
    OutputView.printStart();
  }

  async run() {
    const gameNumbers = BaseballModel.generateGameNumbers();
    await BaseBallController.#guessNumber(gameNumbers);
    const userAnswer = await InputView.readGameCommand();

    if (userAnswer === BaseBallController.RETRY) {
      this.run();
    }
  }

  // prettier-ignore
  /**
   * @param {number} gameNumbers
   */
  static async #guessNumber(gameNumbers) {
    while (true) {
      const userNumbers = await InputView.readGameNumbers();
      const score = BaseballModel.compareUserWithComputerNumbers(userNumbers, gameNumbers);

      OutputView.printHint(score);
      if (score.strike === 3) {
        OutputView.printSuccess();
        break;
      }
    }
  }
}

export default BaseBallController;
