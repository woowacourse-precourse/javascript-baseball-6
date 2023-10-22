const { Random } = require('@woowacourse/mission-utils');
const CONSTANTS = require('./constants/Constant');

class Computer {
  generateNumber() {
    const computer = [];
    while (computer.length < CONSTANTS.SELECT_NUMBERS) {
      const number = Random.pickNumberInRange(CONSTANTS.MIN_NUMBER, CONSTANTS.MAX_NUMBER);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer.join('');
  }
}

module.exports = Computer;
