import { Random } from '@woowacourse/mission-utils';

class ComputerNumber {
  #computerNumbers;
  #MIN_NUM = 1;
  #MAX_NUM = 9;
  #NUM_LENGTH = 3;

  constructor() {
    this.#computerNumbers = this.makeComputerNumber();
  }

  getComputerNumbers() {
    return this.#computerNumbers;
  }

  makeComputerNumber() {
    const computerNumbers = [];
    while (computerNumbers.length < this.#NUM_LENGTH) {
      const randomNumber = this.getRandomNumber();
      if (!computerNumbers.includes(randomNumber)) {
        computerNumbers.push(randomNumber);
      }
    }
    return computerNumbers;
  }

  getRandomNumber() {
    return Random.pickNumberInRange(this.#MIN_NUM, this.#MAX_NUM);
  }
}

export default ComputerNumber;
