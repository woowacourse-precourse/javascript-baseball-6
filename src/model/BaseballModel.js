import { Random } from '@woowacourse/mission-utils';
import { BASEBALL_RANGE } from '../constants/range.js';
import { ERROR_MESSAGE } from '../constants/messages.js';

export class BaseballModel {
  #computerNumber;
  #userNumber;

  create() {
    this.computerNumber = this.#generateNumbers();
    this.#checkComputerNumberLength(this.computerNumber);
    this.#checkComputerNumberDuplication(this.computerNumber);

    console.log(this.computerNumber);
  }

  #generateNumbers() {
    const pickedNumbers = new Set();
    while (pickedNumbers.size !== BASEBALL_RANGE.LENGTH) {
      const pickedNumber = Random.pickNumberInRange(BASEBALL_RANGE.START, BASEBALL_RANGE.END);
      this.#checkGeneratedNumber(pickedNumber);
      pickedNumbers.add(pickedNumber);
    }
    return Array.from(pickedNumbers).join('');
  }

  setUserNumber(userNumber) {
    this.#userNumber = userNumber;
  }

  #checkGeneratedNumber(generatedNumber) {
    if (generatedNumber < BASEBALL_RANGE.START || generatedNumber > BASEBALL_RANGE.END) {
      throw ERROR_MESSAGE.INVALID_COPUTER_RANGE;
    }
  }

  #checkComputerNumberLength(computerNumber) {
    if (computerNumber.length !== BASEBALL_RANGE.LENGTH) {
      throw ERROR_MESSAGE.INVALID_COPUTER_RANGE;
    }
  }

  #checkComputerNumberDuplication(computerNumber) {
    const uniqueNumbers = new Set(computerNumber.split(''));
    if (uniqueNumbers.size !== BASEBALL_RANGE.LENGTH) {
      throw ERROR_MESSAGE.INVALID_COPUTER_RANGE;
    }
  }
}
