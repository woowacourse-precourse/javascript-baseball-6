import BaseballGame from "../Models/BaseballGame";
import InputView from "../Views/InputView";
import OutputView from "../Views/OutputView";
import { GAME_CONSTANTS } from "../utils/constants";

export default class BaseballGameController {
  #inputView;
  #outputView;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    const baseballGame = new BaseballGame();
    baseballGame.setNewAnswer();
    this.readNumbers(baseballGame);
  }

  async readNumbers(game) {
    const input = await this.#inputView.readUserInputNumbers();
    await this.processNumbers(input, game);
  }

  async readCommand() {
    const input = await this.#inputView.readUserInputCommand();
    await this.processCommand(input);
  }

  async processNumbers(input, game) {
    const matchResult = game.calculateBallStrikeScore(input);
    const [ball, strike] = matchResult;
    this.#outputView.printMatchResult(matchResult);
    if (strike === GAME_CONSTANTS.STRIKE_OUT_COUNT) {
      this.readCommand(game);
      return;
    }
    this.readNumbers(game);
  }

  async processCommand() {}
}
