import { MissionUtils } from "@woowacourse/mission-utils";

const NUMBER_LENGTH = 3;
const MIN_NUMBER = 1;
const MAX_NUMBER = 9;

class Computer {
  constructor() {
    this.numbers = [];
  }

  selectNumbers() {
    const numbers = [];

    while (numbers.length < NUMBER_LENGTH) {
      const number = MissionUtils.Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER);

      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }

    this.numbers = [...numbers];
  }

  getNumbers() {
    return [...this.numbers];
  }
}

export default Computer;