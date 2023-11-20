import { HINT_TYPE } from "../Constants.js";

class Hint {
  async getHint(input, answer) {
    let strikes = 0;
    let ball = 0;
    let result = "";
    for (let i = 0; i < input.length; i++) {
      if (answer.includes(input[i])) {
        ball++;
      }
      if (input[i] === answer[i]) {
        strikes++;
        ball--;
      }
    }
    result = `${ball}${HINT_TYPE.BALL} ${strikes}${HINT_TYPE.STRIKE}`;

    if (strikes === 0 && ball === 0) return (result = HINT_TYPE.NOTHING);
    if (strikes === 0) return (result = `${ball}${HINT_TYPE.BALL}`);
    if (ball === 0) return (result = `${strikes}${HINT_TYPE.STRIKE}`);
    return result;
  }
}

export default Hint;
