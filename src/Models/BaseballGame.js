import { GAME_CONSTANTS } from "../utils/constants.js";
import { gameUtils } from "../utils/gameUtils.js";

const { MIN_NUMBER, MAX_NUMBER, ANSWER_LENGTH } = GAME_CONSTANTS;

export default class BaseballGame {
  #answer;

  setNewAnswer() {
    this.#answer = gameUtils.generateAnswer(
      MIN_NUMBER,
      MAX_NUMBER,
      ANSWER_LENGTH
    );
  }

  calculateBallStrikeScore(userInput) {
    let strike = 0;
    let ball = 0;
    const pitchedBallNumbers = userInput.split("").map(Number);
    for (let i = 0; i < pitchedBallNumbers.length; i += 1) {
      if (this.#answer[i] === pitchedBallNumbers[i]) {
        strike += 1;
        continue;
      }
      if (this.#answer.includes(pitchedBallNumbers[i])) {
        ball += 1;
      }
    }
    console.log(ball, strike);
    return [ball, strike];
  }

  resetAnswer() {
    this.setNewAnswer();
  }
}
