import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./Constants.js";
import Computer from "./Computer.js";
class CheckAnswer {
  constructor() {
    this.computer = new Computer();
  }

  countCorrectNumber(input) {
    let inputArr = input.split("").map((number) => Number(number));
    let count = inputArr.filter((number) =>
      this.computer.number.includes(number)
    ).length;
    return count;
  }

  isStrike(input) {
    let strike = 0;
    let inputArr = input.split("").map((number) => Number(number));
    this.computer.number.forEach((number, index) => {
      if (number === inputArr[index]) {
        strike++;
      }
    });
    return strike;
  }

  showResult(input) {
    let count = this.countCorrectNumber(input);
    let strike = this.isStrike(input);

    if (!count) {
      Console.print(MESSAGE.RESULT_NOTHING);
    } else {
      count = this.countCorrectNumber(input);
      strike = this.isStrike(input);
      let ball = count - strike;
      let resultBall = ball ? `${ball}볼` : "";
      let resultStrike = strike ? `${strike}스트라이크` : "";
      Console.print(resultBall + resultStrike);
    }
    return strike;
  }
}

export default CheckAnswer;
