import { GAME_CONSTANTS, USER_COMMANDS } from "../utils/constants.js";
import { gameUtils } from "../utils/gameUtils.js";

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
    this.#setGameState(playing);
  }

  #quitGame() {
    this.#setGameState(quit);
  }

  #setNewAnswer() {
    this.#answer = gameUtils.generateAnswer(minNumber, maxNumber, answerLength);
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
      case USER_COMMANDS.restart:
        this.#startNewGame();
        break;
      case USER_COMMANDS.quit:
        this.#quitGame();
        break;
    }
  }

  #updateGameStateAfterPitch(strike) {
    if (strike === strikeOutCount) {
      this.#setGameState(command);
    }
  }

  isInCommandPhase() {
    return this.#gameState === command;
  }

  isGameEnded() {
    return this.#gameState === quit;
  }
}

const GAME_STATES = {
  playing: "PLAYING",
  command: "COMMAND",
  quit: "QUIT",
};

const { playing, command, quit } = GAME_STATES;
const { minNumber, maxNumber, answerLength, strikeOutCount } = GAME_CONSTANTS;
