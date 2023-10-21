import BaseballTerms from "./BaseballTerms.js";
import UmpireIndicator from "./UmpireIndicator.js";

class Umpire {
  umpire(array1, array2) {
    const { strikeCount, ballCount } = this.#count(array1, array2);
    if (strikeCount) return strikeCount + BaseballTerms.STRIKE;
    if (ballCount) return ballCount + BaseballTerms.BALL;
    return BaseballTerms.NOTHING;
  }

  #count(array1, array2) {
    const umpireIndicator = new UmpireIndicator();
    umpireIndicator.strikeCount = this.#getStrikeCount(array1, array2);
    umpireIndicator.ballCount = this.#getBallCount(array1, array2);
    return umpireIndicator;
  }

  #getStrikeCount(array1, array2) {
    let count = 0;
    for (let i = 0; i < 3; i++) {
      if (array1[i] === array2[i]) count++;
    }
    return count;
  }

  #getBallCount(array1, array2) {
    let count = 0;
    for (let i = 0; i < 3; i++) {
      if (array1[i] === array2[i]) continue;
      if (array1.includes(array2[i])) count++;
    }
    return count;
  }
}

export default Umpire;
