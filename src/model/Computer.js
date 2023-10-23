import { Random } from "@woowacourse/mission-utils";

export default class Computer {
  #computerNumber;

  constructor() {
    this.createRandomNumber();
  }

  createRandomNumber() {
    const randomNumber = new Set();

    while (randomNumber.size < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!randomNumber.has(number)) {
        randomNumber.add(number);
      }
    }
    this.#computerNumber = [...randomNumber];
  }

  getComputerNumber() {
    return this.#computerNumber;
  }
}
