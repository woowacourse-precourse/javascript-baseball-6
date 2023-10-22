import { Random } from "@woowacourse/mission-utils";

export class CreateNumber {
  constructor() {
    this.randomNumber = this.generateRandomNumbers();
  }

  generateRandomNumbers() {
    const numbers = [];
    while (numbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    return numbers;
  }
}
