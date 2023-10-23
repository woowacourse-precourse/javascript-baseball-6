import { Random } from "@woowacourse/mission-utils";

class Baseball {
  static #BASEBALL_LENGTH = 3;
  #baseball;

  constructor(baseballString) {
    this.#baseball = [];
    if (baseballString) {
      if (this.isInvalidBaseballString(baseballString))
        throw new Error("[ERROR]");
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

  isInvalidBaseballString(baseballString) {
    if (baseballString.length > 3) return true;
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
