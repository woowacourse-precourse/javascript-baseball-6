import { MIN_NUMBER, MAX_NUMBER, ANSWER_LENGTH } from "../utils/constants";
import { gameUtils } from "../utils/gameUtils.js";

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
        return;
      }
      if (this.#answer.includes(pitchedBallNumbers[i])) {
        ball += 1;
      }
    }
    return [ball, strike];
  }

  resetAnswer() {
    this.setNewAnswer();
  }
}
