import BaseballGame from '../Models/BaseballGame.js';
import InputView from '../Views/InputView.js';
import OutputView from '../Views/OutputView.js';
import { validationUtils } from '../utils/validationUtils.js';

export default class BaseballGameController {
  #inputView;
  #outputView;
  #baseballGame;

  constructor(inputView, outputView, baseballGame) {
    this.#inputView = inputView;
    this.#outputView = outputView;
    this.#baseballGame = baseballGame;
  }

  async play() {
    this.#outputView.printStart();
    while (!this.#baseballGame.isGameEnded()) {
      if (this.#baseballGame.isInCommandPhase()) {
        const input = await this.#readCommandInput();
        this.#processCommand(input);
        continue;
      }
      const input = await this.#readNumbersInput();
      this.#processNumbers(input);
    }
  }

  async #readNumbersInput() {
    return await this.#inputView.readUserInputNumbers();
  }

  #processNumbers(input) {
    validationUtils.validateNumbers(input);
    const matchResult = this.#baseballGame.handleUserPitches(input);
    this.#outputView.printMatchResult(matchResult);
  }

  async #readCommandInput() {
    return await this.#inputView.readUserInputCommand();
  }

  #processCommand(input) {
    validationUtils.validateCommand(input);
    this.#baseballGame.handleUserCommand(input);
  }
}
