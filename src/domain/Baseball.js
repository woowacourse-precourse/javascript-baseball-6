import RandomNumberGenerator from "../utils/RandomNumberGenerator.js";
import { StaticNumber } from "./Constant.js";

class Baseball {
  #answer;

  constructor(randomNumber) {
    this.#answer = randomNumber;
  }

  getStrikeCount(input) {
    const count = input.reduce((acc, value, i) => {
      return value === this.#answer[i] ? acc + 1 : acc;
    }, 0);

    return count;
  }

  getBallCount(input, strikeCount) {
    const count =
      input.filter((value) => this.#answer.includes(value)).length -
      strikeCount;
    return count;
  }

  getResetNumber() {
    this.#answer = RandomNumberGenerator.generateRandomNumber(
      StaticNumber.BASEBALL_NUMBER_LENGTH
    );
  }
}

export default Baseball;
