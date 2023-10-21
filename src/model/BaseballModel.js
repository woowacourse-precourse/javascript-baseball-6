import { Random } from '@woowacourse/mission-utils';
import { BASEBALL_RANGE } from '../constants/range.js';

export class BaseballModel {
  constructor() {
    this.computerNumbers = this.#generateNumbers();
  }

  #generateNumbers() {
    const pickedNumbers = new Set();
    while (pickedNumbers.size !== BASEBALL_RANGE.LENGTH) {
      pickedNumbers.add(Random.pickNumberInRange(BASEBALL_RANGE.START, BASEBALL_RANGE.END));
    }
    return Array.from(pickedNumbers).join('');
  }
}
