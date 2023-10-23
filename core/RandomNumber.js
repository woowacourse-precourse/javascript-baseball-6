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
      RandomNumber.pushNumberInComputer(computer, getPerNumber);
    }

    return computer;
  }

  static pushNumberInComputer(computer, number) {
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
}

export default RandomNumber;
