import { Random } from '@woowacourse/mission-utils';

class Computer {
  getNumbers() {
    return this.generate();
  }

  generate() {
    return Random.pickUniqueNumbersInRange(1, 9, 3);
  }
}

module.exports = Computer;