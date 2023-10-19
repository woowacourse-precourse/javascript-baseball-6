import BaseballGame from "../Models/BaseballGame.js";
import InputView from "../Views/InputView.js";
import OutputView from "../Views/OutputView.js";
import {
  GAME_STATES,
  GAME_CONSTANTS,
  USER_COMMANDS,
} from "../utils/constants.js";
import { validateUtils } from "../utils/validateUtils.js";

const { PLAYING, COMMAND, QUIT } = GAME_STATES;

export default class BaseballGameController {
  #inputView;
  #outputView;
  #gameState;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#gameState = PLAYING;
  }

  async play() {
    const baseballGame = new BaseballGame();
    baseballGame.setNewAnswer();

    while (this.#gameState !== QUIT) {
      switch (this.#gameState) {
        case PLAYING:
          await this.readAndProcessNumbers(baseballGame);
          break;
        case COMMAND:
          await this.readAndProcessCommand(baseballGame);
          break;
      }
    }
  }

  async readAndProcessNumbers(game) {
    const input = await this.#inputView.readUserInputNumbers();
    validateUtils.validateNumbers(input);

    const matchResult = game.calculateBallStrikeScore(input);
    const [ball, strike] = matchResult;
    this.#outputView.printMatchResult(matchResult);

    if (strike === GAME_CONSTANTS.STRIKE_OUT_COUNT) {
      this.#gameState = COMMAND;
    }
  }

  async readAndProcessCommand(game) {
    const input = await this.#inputView.readUserInputCommand();
    validateUtils.validateCommand(input);

    switch (input) {
      case USER_COMMANDS.RESTART:
        game.setNewAnswer();
        this.#gameState = PLAYING;
        break;
      case USER_COMMANDS.QUIT:
        this.#gameState = QUIT;
        break;
    }
  }
}
