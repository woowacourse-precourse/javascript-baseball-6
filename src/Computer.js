import { MissionUtils } from "@woowacourse/mission-utils";

export default class Computer {
  generateNumbers() {
    let numbers = [];
    while (numbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    return numbers;
  }
}
