import { Random } from '@woowacourse/mission-utils';

export default class ComputerNumber {
  static generateComputerNumber() {
    const computerNumber = new Set();
    while (computerNumber.size < 3) {
      computerNumber.add(Random.pickNumberInRange(1, 9));
    }
    return [...computerNumber];
  }
}
