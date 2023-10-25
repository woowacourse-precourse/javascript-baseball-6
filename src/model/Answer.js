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
}

export default Answer;
