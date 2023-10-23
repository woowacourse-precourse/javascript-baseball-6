import { Random } from '@woowacourse/mission-utils';
import { CONSTANTS } from './constants/constant';

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

export default Computer;