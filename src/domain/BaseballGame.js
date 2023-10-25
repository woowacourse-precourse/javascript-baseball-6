import randomNumberGenerator from "../utils/RandomNumberGenerator.js";
import { StaticNumber } from "./Constant.js";
class BaseballGame {
  #answer;

  constructor(randomNumber) {
    this.#answer = randomNumber;
  }

  getStrikeCount(userGuessNumber) {
    const strikeCount = userGuessNumber.reduce((count, value, i) => {
      return value === this.#answer[i] ? count + 1 : count;
    }, 0);

    return strikeCount;
  }

  getBallCount(userGuessNumber, strikeCount) {
    const ballCount =
      userGuessNumber.filter((number) => this.#answer.includes(number)).length -
      strikeCount;
    return ballCount;
  }

  resetAnswer() {
    this.#answer = randomNumberGenerator.generate(
      StaticNumber.ANSWER_NUMBER_LENGTH
    );
  }
}

export default BaseballGame;
