import { Random } from "@woowacourse/mission-utils";

class Computer {
  constructor() {
    this.initNumbers();
  }

  initNumbers() {
    const numbers = [];

    while (numbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);

      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }

    this.numbers = numbers;
  }
}

export default Computer;
