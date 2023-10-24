import { Random } from "@woowacourse/mission-utils";
import { ErrorMessages } from "./Messages.js";

class Baseball {
  static #BASEBALL_LENGTH = 3;
  #baseball;

  constructor(baseballString) {
    this.#baseball = [];
    if (baseballString) {
      this.validateBaseballString(baseballString);
      this.setStringToBaseball(baseballString);
    } else this.setRandomBaseball();
  }

  getBaseball() {
    return this.#baseball;
  }

  setRandomBaseball() {
    while (this.#baseball.length < Baseball.#BASEBALL_LENGTH) {
      let randomNumber = Random.pickNumberInRange(1, 9);
      if (!this.#baseball.includes(randomNumber))
        this.#baseball.push(randomNumber);
    }
  }

  setStringToBaseball(baseballString) {
    for (let i = 0; i < Baseball.#BASEBALL_LENGTH; i++) {
      let number = parseInt(baseballString[i]);
      this.#baseball.push(number);
    }
  }

  validateBaseballString(baseballString) {
    if (baseballString.length > 3)
      throw new Error(ErrorMessages.Invalid_Length);
    if (baseballString.match(/[^0-9]/g))
      throw new Error(ErrorMessages.Invalid_String);
    if (baseballString.length !== new Set(baseballString).size)
      throw new Error(ErrorMessages.Invalid_Number);
  }

  static compareBaseball(guessBall, answerBall) {
    const guess = guessBall.getBaseball();
    const answer = answerBall.getBaseball();

    const result = {
      strike: 0,
      ball: 0,
      out: false,
    };

    for (let i = 0; i < Baseball.#BASEBALL_LENGTH; i++) {
      if (answer[i] === guess[i]) result.strike++;
      else if (answer.includes(guess[i])) result.ball++;
    }

    if (result.strike + result.ball === 0) result.out = true;
    return result;
  }
}

export default Baseball;
