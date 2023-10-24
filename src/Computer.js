import { MissionUtils } from "@woowacourse/mission-utils";
import { MAX_NUMBER, MIN_NUMBER } from "./Constants.js";

export default class Computer {
  generateNumbers() {
    let numbers = [];
    while (numbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    return numbers;
  }
}
