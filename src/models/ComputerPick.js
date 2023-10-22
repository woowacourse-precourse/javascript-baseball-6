import { Random } from "@woowacourse/mission-utils";
import {
  MIN_NUMBER,
  MAX_NUMBER,
  LIMIT_LENGTH,
} from "../constants/Constants.js";

class ComputerPick {
  getAnswer() {
    let answer = [];
    while (answer.length < LIMIT_LENGTH) {
      const number = Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER);
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }
    return answer;
  }
}

export default ComputerPick;
