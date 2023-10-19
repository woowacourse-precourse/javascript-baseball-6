import BaseballGame from "../Models/BaseballGame.js";
import InputView from "../Views/InputView.js";
import OutputView from "../Views/OutputView.js";
import { GAME_CONSTANTS, USER_COMMANDS } from "../utils/constants.js";

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
    await this.processCommand(input, game);
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

  async processCommand(input, game) {
    if (input === USER_COMMANDS.RESTART) {
      game.setNewAnswer();
      this.readNumbers(game);
      return;
    }
    if (input === USER_COMMANDS.QUIT) {
      return;
    }
  }
}
