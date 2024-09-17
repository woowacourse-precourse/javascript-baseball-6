import { Random } from '@woowacourse/mission-utils';

class Computer {
  /**
   * @type number Array
   */
  #computerNum;

  constructor() {}

  get computerNum() {
    return this.#computerNum;
  }

  createRandomNumber() {
    const computerNum = [];

    while (computerNum.length < 3) {
      const number = Random.pickNumberInRange(1, 9);

      if (!computerNum.includes(number)) {
        computerNum.push(number);
      }
    }
    this.#computerNum = computerNum;
  }
}

export default Computer;
