const { Random } = require('@woowacourse/mission-utils');

class Computer {
  constructor() {
    this.computerNumber = this.generateRandomNumber();
  }

  generateRandomNumber() {
    const computer = [];

    while (computer.length < 3) {
      const computerNumber = Random.pickNumberInRange(1, 9);

      if (!computer.includes(computerNumber)) {
        computer.push(computerNumber);
      }
    }

    return computer.join('');
  }
}

module.exports = Computer;
