import RandomNumbers from './RandomNumbers.js';

class Computer {
  constructor() {
    this.numbers = new RandomNumbers();
  }

  static getComputer() {
    const computer = new Computer();
    return computer.numbers;
  }
}

export default Computer;
