import BaseballTerms from "./BaseballTerms.js";
import UmpireIndicator from "./UmpireIndicator.js";

class Umpire {
  #umpireIndicator = new UmpireIndicator();

  umpire(array1, array2) {
    this.#count(array1, array2);
    const { NOTHING, STRIKE, BALL } = BaseballTerms;
    const { strike, ball } = this.#umpireIndicator;
    if (strike && ball) return ball + BALL + " " + strike + STRIKE;
    if (strike) return strike + STRIKE;
    if (ball) return ball + BALL;
    return NOTHING;
  }

  #initUmpireIndicator() {
    this.#umpireIndicator.strike = 0;
    this.#umpireIndicator.ball = 0;
  }

  #count(array1, array2) {
    this.#initUmpireIndicator();
    this.#countStrike(array1, array2);
    this.#countBall(array1, array2);
  }

  #countStrike(array1, array2) {
    for (let i = 0; i < 3; i++) {
      if (array1[i] === array2[i]) this.#umpireIndicator.strike += 1;
    }
  }

  #countBall(array1, array2) {
    for (let i = 0; i < 3; i++) {
      if (array1[i] === array2[i]) continue;
      if (array1.includes(array2[i])) this.#umpireIndicator.ball += 1;
    }
  }
}

export default Umpire;
