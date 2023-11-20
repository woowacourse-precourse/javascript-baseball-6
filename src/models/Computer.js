import { getRandomNumbers } from '../utils/randomNumber.js';

class Computer {
  /**
   * @type {number[]}
   */
  #numbers;

  constructor() {
    this.#setNumbers();
  }
  #setNumbers() {
    const numbers = getRandomNumbers();
    this.#numbers = numbers;
  }

  reStart() {
    this.#setNumbers();
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Computer;
