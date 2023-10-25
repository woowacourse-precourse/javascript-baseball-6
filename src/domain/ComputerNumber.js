import { Random } from '@woowacourse/mission-utils';
import { NUMBER } from '../utils/Constant.js';

class ComputerNumber {
  #computerNumbers;

  constructor() {
    this.#computerNumbers = this.makeComputerNumber();
  }

  getComputerNumbers() {
    return this.#computerNumbers;
  }

  makeComputerNumber() {
    const computerNumbers = [];
    while (computerNumbers.length < NUMBER.LENGTH) {
      const randomNumber = this.getRandomNumber();
      if (!computerNumbers.includes(randomNumber)) {
        computerNumbers.push(randomNumber);
      }
    }
    return computerNumbers;
  }

  getRandomNumber() {
    return Random.pickNumberInRange(NUMBER.MIN_NUM, NUMBER.MAX_NUM);
  }
}

export default ComputerNumber;
