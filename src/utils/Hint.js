import { CONSOLE_MESSAGE } from "../Constants";

class Hint {
  async GetHint(input, answer) {
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
    result = `${ball}${CONSOLE_MESSAGE.BALL} ${strikes}${CONSOLE_MESSAGE.STRIKE}`;

    if (strikes === 0 && ball === 0) return (result = "낫싱");
    if (strikes === 0) return (result = `${ball}볼`);
    if (ball === 0) return (result = `${strikes}스트라이크`);
    return result;
  }
}

export default Hint;
