import BaseballGameService from '../service/BaseballGameService.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class BaseballGameController {
  #baseballGameService;

  constructor() {
    this.#baseballGameService = new BaseballGameService();
  }

  async startGame() {
    OutputView.printStartString();

    return this.#inputUserNumbers();
  }

  async #inputUserNumbers() {
    const numbers = await InputView.readNumbers();
    const { strikeCount, hintMessage } = await this.#baseballGameService.baseballResult(numbers);

    return this.#handleInputOrEnd(strikeCount, hintMessage);
  }

  #handleInputOrEnd(strikeCount, hintMessage) {
    OutputView.printHintString(hintMessage);
    if (this.#baseballGameService.isGameEnd(strikeCount)) {
      OutputView.printEndString();

      return this.#inputRestart();
    }

    return this.#inputUserNumbers();
  }

  async #inputRestart() {
    const restart = await InputView.readRestart();
    if (this.#baseballGameService.shouldRestart(restart)) {
      this.#baseballGameService.resetGame();

      return this.#inputUserNumbers();
    }

    return Promise.resolve();
  }
}

export default BaseballGameController;
