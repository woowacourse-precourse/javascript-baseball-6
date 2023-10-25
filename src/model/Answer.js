import { MissionUtils } from "@woowacourse/mission-utils";
import { ANSWER_LENGTH, MIN, MAX } from "../constants/constants";

class Answer {
  #computerNum;

  constructor() {
    this.#computerNum = [];
  }

  setAnswer() {
    while (this.#computerNum.length < ANSWER_LENGTH) {
      let number = MissionUtils.Random.pickNumberInRange(MIN, MAX);
      if (!this.#computerNum.includes(number)) {
        this.#computerNum.push(number);
      }
    }
  }

  guessNum(input) {
    const guessResult = { ball: 0, strike: 0 };

    for (let i = 0; i < 3; i++) {
      if (this.#computerNum.includes(parseInt(input[i]))) {
        if (parseInt(input[i]) === this.#computerNum[i]) {
          guessResult.strike += 1;
        } else guessResult.ball += 1;
      }
    }
    return guessResult;
  }

  resetAnswer() {
    this.#computerNum = [];
  }
}

export default Answer;
