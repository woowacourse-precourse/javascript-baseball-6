import { Random } from "@woowacourse/mission-utils";
import Constants from "../utils/Constants.js";

export class CreateNumber {
  constructor() {
    this.randomNumber = this.generateRandomNumbers();
  }

  generateRandomNumbers() {
    const numbers = [];
    while (numbers.length < Constants.RANDOM_DIGIT) {
      const number = Random.pickNumberInRange(Constants.MINIMUM, Constants.MAXIMUM);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    return numbers;
  }
}
