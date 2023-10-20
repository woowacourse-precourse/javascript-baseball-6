import {
  GAME_CONSTANTS,
  GAME_STATES,
  USER_COMMANDS,
} from "../utils/constants.js";
import { gameUtils } from "../utils/gameUtils.js";

const { MIN_NUMBER, MAX_NUMBER, ANSWER_LENGTH } = GAME_CONSTANTS;
const { PLAYING, COMMAND, QUIT } = GAME_STATES;

export default class BaseballGame {
  #answer;
  #gameState;

  constructor() {
    this.#startNewGame();
  }

  #setGameState(state) {
    this.#gameState = state;
  }

  #startNewGame() {
    this.#setNewAnswer();
    this.#setGameState(PLAYING);
  }

  #quitGame() {
    this.#setGameState(QUIT);
  }

  #setNewAnswer() {
    this.#answer = gameUtils.generateAnswer(
      MIN_NUMBER,
      MAX_NUMBER,
      ANSWER_LENGTH
    );
  }

  handleUserPitches(userInput) {
    const pitchedBallNumbers = userInput.split("").map(Number);
    const [ball, strike] = gameUtils.calculateBallStrikeScore(
      this.#answer,
      pitchedBallNumbers
    );
    this.#updateGameStateAfterPitch(strike);
    return [ball, strike];
  }

  handleUserCommand(input) {
    switch (input) {
      case USER_COMMANDS.RESTART:
        this.#startNewGame();
        break;
      case USER_COMMANDS.QUIT:
        this.#quitGame();
        break;
    }
  }

  #updateGameStateAfterPitch(strike) {
    if (strike === GAME_CONSTANTS.STRIKE_OUT_COUNT) {
      this.#setGameState(COMMAND);
    }
  }

  isInCommandPhase() {
    return this.#gameState === COMMAND;
  }

  isGameEnded() {
    return this.#gameState === QUIT;
  }
}
