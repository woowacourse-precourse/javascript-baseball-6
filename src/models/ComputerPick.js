import { Random } from "@woowacourse/mission-utils";
import { GAME_RULES } from "../constants/Constants.js";

class ComputerPick {
  getAnswer() {
    const answer = [];
    while (answer.length < GAME_RULES.LIMIT_LENGTH) {
      const number = Random.pickNumberInRange(
        GAME_RULES.MIN_NUMBER,
        GAME_RULES.MAX_NUMBER
      );
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }
    return answer;
  }
}

export default ComputerPick;
