import { Random } from '@woowacourse/mission-utils';

export default class Computer {
  #selectNumber;

  constructor() {
    this.generate();
  }

  generate = () => {
    const generatedNumber = new Set();

    while (generatedNumber.size < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!generatedNumber.has(number)) {
        generatedNumber.add(number);
      }
    }
    this.#selectNumber = generatedNumber;
  };

  getSelectNumber = () => this.#selectNumber;
}
