import { randomNumbersGenerator } from '../utils/randomNumbersGenerator';

class Computer {
  #numbers;

  constructor() {
    this.#numbers = [];
  }

  #setNumbers() {
    this.#numbers = randomNumbersGenerator();
  }

  getNumbers() {
    return this.#numbers;
  }

  resetNumbers() {
    this.#setNumbers();
  }
}

export default Computer;
