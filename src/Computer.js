import {Random} from '@woowacourse/mission-utils';
import CONSTANTS from './Constants';

const Computer = {
  generateNumber() {
    const computer = [];
    while (computer.length < CONSTANTS.validLength) {
      const number = Random.pickNumberInRange(CONSTANTS.minimumNumber, CONSTANTS.maximumNumber);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  },
};

export default Computer;
