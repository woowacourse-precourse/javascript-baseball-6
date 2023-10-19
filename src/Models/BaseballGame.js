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
}
