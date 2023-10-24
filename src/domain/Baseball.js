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
    let count = 0;

    for (let i = 0; i < input.length; i++) {
      if (this.#answer.includes(input[i])) count += 1;
    }

    return count - strikeCount;
  }

  getResetNumber() {
    this.#answer = RandomNumberGenerator.generateRandomNumber(
      StaticNumber.BASEBALL_NUMBER_LENGTH
    );
  }
}

export default Baseball;
