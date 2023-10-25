import { randomNumbersGenerator } from '../utils/randomNumbersGenerator.js';

class Computer {
  constructor() {
    this.numbers = [];
  }

  setNumbers() {
    this.numbers = randomNumbersGenerator();
  }

  getNumbers() {
    return this.numbers;
  }
}

export default Computer;
