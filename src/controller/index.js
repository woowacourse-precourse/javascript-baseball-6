import BaseballModel from '../model/index.js';
import { InputView, OutputView } from '../view/index.js';

class BaseBallController {
  #model;

  static RETRY = '1';

  constructor() {
    OutputView.printStart();
    this.#model = new BaseballModel();
  }

  async run() {
    this.#model.generateGameNumbers();
    await this.#guessNumber();
    const userAnswer = await InputView.readGameCommand();
    if (userAnswer === BaseBallController.RETRY) {
      this.run();
    }
  }

  // TODO : no-await-in-loop 정리
  async #guessNumber() {
    while (true) {
      const userNumbers = await InputView.readGameNumbers();
      const score = this.#model.compareUserWithComputerNumbers(userNumbers);

      OutputView.printHint(score);
      if (score.strike === 3) {
        OutputView.printSuccess();
        break;
      }
    }
  }
}

export default BaseBallController;
