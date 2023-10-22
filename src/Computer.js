import { MissionUtils } from "@woowacourse/mission-utils";
import { MAX_NUMBER, MIN_NUMBER, NUM_DIGITS } from "./constants/NumberConstants.js";

export default class Computer {
  generateNumbers() {
    const numbers = [];
    while (numbers.length < NUM_DIGITS) {
      const number = MissionUtils.Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    return numbers;
  }
}
