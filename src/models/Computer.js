import { Random } from '@woowacourse/mission-utils';
import { CONSTANTS } from '../constants/constant';

class Computer {
  generateNumber() {
    const computer = [];

    while (computer.length < CONSTANTS.selectNumber) {
      const number = Random.pickNumberInRange(CONSTANTS.startScope, CONSTANTS.endScope);

      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    return computer.join('');
  }
}

export default Computer;