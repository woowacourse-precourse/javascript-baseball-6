import Numbers from './Numbers.js';

class Computer {
  targetNumbers;

  constructor(targetNumbers) {
    this.targetNumbers = targetNumbers ?? Numbers.create();
    Object.freeze(this.targetNumbers);
  }
}

export default Computer;
