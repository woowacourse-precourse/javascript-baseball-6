import { Random } from '@woowacourse/mission-utils';

class Computer {
  constructor() {
    this.computer = [];
  }

  getNumber() {
    while (this.computer.length < 3) this.createRandomNumber();
    return this.computer;
  }

  createRandomNumber() {
    const number = Random.pickNumberInRange(1, 9);
    if (!this.computer.includes(number)) this.computer.push(number);
  }
}

export default Computer;
