import { Random } from '@woowacourse/mission-utils';
import { BASEBALL_RANGE } from '../constants/range.js';
import { ERROR_MESSAGE } from '../constants/messages.js';

export class BaseballModel {
  computerNumber;

  create() {
    this.computerNumber = this.#generateNumbers();
    this.#checkComputerNumberLength(this.computerNumber);
  }

  #generateNumbers() {
    const pickedNumbers = new Set();
    while (pickedNumbers.size !== BASEBALL_RANGE.LENGTH) {
      const pickedNumber = Random.pickNumberInRange(BASEBALL_RANGE.START, BASEBALL_RANGE.END);
      this.#checkInvalidateGeneratedNumber(pickedNumber);
      pickedNumbers.add(pickedNumber);
    }
    return Array.from(pickedNumbers).join('');
  }

  #checkInvalidateGeneratedNumber(generatedNumber) {
    if (generatedNumber < BASEBALL_RANGE.START || generatedNumber > BASEBALL_RANGE.END) {
      throw ERROR_MESSAGE.INVALID_COPUTER_RANGE;
    }
  }

  #checkComputerNumberLength(computerNumber) {
    if (computerNumber.length !== BASEBALL_RANGE.length) {
      throw ERROR_MESSAGE.INVALID_COPUTER_RANGE;
    }
  }
}
