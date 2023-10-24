import { NUMBER_SIZE } from '../constants/index.js';
import generateRandomNumber from '../utils/generateRandomNumber.js';

class Computer {
  #randomNumber;

  constructor(randomNumber) {
    this.#randomNumber = randomNumber;
  }

  getStrikeCount = inputNumbers => {
    let count = 0;

    for (let i = 0; i < inputNumbers.length; i += 1) {
      if (inputNumbers[i] === this.#randomNumber[i]) count += 1;
    }

    return count;
  };

  getBallCount = (inputNumbers, strikeCount) => {
    let count = 0;

    for (let i = 0; i < inputNumbers.length; i += 1) {
      if (this.#randomNumber.includes(inputNumbers[i])) count += 1;
    }

    return count - strikeCount;
  };

  reset = () => {
    this.#randomNumber = generateRandomNumber(NUMBER_SIZE);
  };
}

export default Computer;
