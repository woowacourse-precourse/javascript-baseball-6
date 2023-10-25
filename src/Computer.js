import { Random } from '@woowacourse/mission-utils';

class Computer {
  static generateNumber() {
    let number = [];

    while (number.length < 3) {
      const digit = Random.pickNumberInRange(1, 9);

      if (!number.includes(digit)) number.push(digit);
    }

    return number;
  }
}

export default Computer;
