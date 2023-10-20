import { Random } from '@woowacourse/mission-utils';

class RandomNumber {
  static createNumber() {
    const computer = [];
    while (computer.length < 3) {
      const getPerNumber = Random.pickNumberInRange(1, 9);
      if (!computer.includes(getPerNumber)) {
        computer.push(getPerNumber);
      }
    }

    return computer;
  }
}

export default RandomNumber;
