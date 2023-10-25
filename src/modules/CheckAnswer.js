import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./Constants.js";
class CheckAnswer {
  constructor() {}

  countCorrectNumber(answer, input) {
    let inputArr = input.split("").map((number) => Number(number));
    let count = inputArr.filter((number) => answer.includes(number)).length;
    return count;
  }

  isStrike(answer, input) {
    let strike = 0;
    let inputArr = input.split("").map((number) => Number(number));
    answer.forEach((number, index) => {
      if (number === inputArr[index]) {
        strike++;
      }
    });
    return strike;
  }

  async showResult(answer, input) {
    let count = this.countCorrectNumber(answer, input);
    let strike = this.isStrike(answer, input);

    if (!count) {
      Console.print(MESSAGE.RESULT_NOTHING);
    } else {
      try {
        count = this.countCorrectNumber(answer, input);
        strike = this.isStrike(answer, input);
        let ball = count - strike;
        let resultBall = ball ? `${ball}볼` : "";
        let resultStrike = strike ? `${strike}스트라이크` : "";
        Console.print(resultBall + resultStrike);
      } catch (error) {
        throw error;
      }
    }
    return strike;
  }
}

export default CheckAnswer;
