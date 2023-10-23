import { Random } from '@woowacourse/mission-utils';

import { COMPUTER } from './Constants';

class RandomNumber {
  static createNumber() {
    const computer = [];
    while (computer.length < COMPUTER.STORAGE_LIMIT) {
      const getPerNumber = Random.pickNumberInRange(
        COMPUTER.START_NUMBER,
        COMPUTER.END_NUMBER
      );
      if (!computer.includes(getPerNumber)) {
        computer.push(getPerNumber);
      }
    }

    return computer;
  }
}

export default RandomNumber;
