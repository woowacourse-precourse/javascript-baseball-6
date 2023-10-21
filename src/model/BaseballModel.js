import { Random } from '@woowacourse/mission-utils';
import { BASEBALL_RANGE } from '../constants/range.js';
import { ERROR_MESSAGE } from '../constants/messages.js';

export class BaseballModel {
  computerNumber;

  create() {
    this.computerNumber = this.#generateNumbers();
  }

  #generateNumbers() {
    const pickedNumbers = new Set();
    while (pickedNumbers.size !== BASEBALL_RANGE.LENGTH) {
      const pickedNumber = Random.pickNumberInRange(BASEBALL_RANGE.START, BASEBALL_RANGE.END);
      // this.#checkInvalidateGeneratedNumber(0);
      pickedNumbers.add(pickedNumber);
    }
    return Array.from(pickedNumbers).join('');
  }

  #checkInvalidateGeneratedNumber(generatedNumber) {}

  #checkComputerNumberLength(computerNumber) {}
}
