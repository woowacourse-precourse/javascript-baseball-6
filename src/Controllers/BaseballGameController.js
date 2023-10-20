import BaseballGame from "../Models/BaseballGame.js";
import InputView from "../Views/InputView.js";
import OutputView from "../Views/OutputView.js";
import { validateUtils } from "../utils/validateUtils.js";

export default class BaseballGameController {
  #inputView;
  #outputView;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  async play() {
    const baseballGame = new BaseballGame();

    while (!baseballGame.isGameEnded()) {
      if (baseballGame.isInCommandPhase()) {
        await this.#readCommandInput(baseballGame);
      } else {
        await this.#readNumbersInput(baseballGame);
      }
    }
  }

  async #readNumbersInput(game) {
    const input = await this.#inputView.readUserInputNumbers();
    this.#processNumbers(game, input);
  }

  #processNumbers(game, input) {
    validateUtils.validateNumbers(input);
    const matchResult = game.handleUserPitches(input);
    this.#outputView.printMatchResult(matchResult);
  }

  async #readCommandInput(game) {
    const input = await this.#inputView.readUserInputCommand();
    this.#processCommand(game, input);
  }

  #processCommand(game, input) {
    validateUtils.validateCommand(input);
    game.handleUserCommand(input);
  }
}
