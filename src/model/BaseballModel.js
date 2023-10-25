import { Random } from '@woowacourse/mission-utils';
import { BASEBALL_RANGE } from '../constants/range.js';
import { ERROR_MESSAGE } from '../constants/messages.js';
import { REGEXP } from '../constants/regexp.js';

export class BaseballModel {
  #computerNumber;
  #userNumber;
  #isFinished = false;

  init() {
    this.#isFinished = false;
  }

  getIsFinished() {
    return this.#isFinished;
  }

  setIsFinished() {
    this.#isFinished = true;
  }

  settingComputerNumber() {
    this.init();
    this.#computerNumber = this.#generateNumbers();
    this.checkValidationComputerNumber();
  }

  checkValidationComputerNumber() {
    this.#checkValidComputerNumber(this.#computerNumber);
    this.#checkComputerNumberLength(this.#computerNumber);
    this.#checkComputerNumberDuplication(this.#computerNumber);
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

  getGameResult() {
    return this.countGameResult(this.#computerNumber, this.#userNumber);
  }

  countGameResult(computerNumber, userNumber) {
    if (computerNumber === userNumber) {
      return { ball: 0, strike: 3 };
    }

    let ball = 0;
    let strike = 0;
    for (let i = 0; i < computerNumber.length; i++) {
      if (computerNumber[i] === userNumber[i]) {
        strike += 1;
        continue;
      }

      if (userNumber.includes(computerNumber[i])) {
        ball += 1;
        continue;
      }
    }

    return { ball, strike };
  }

  setUserNumber(userNumber) {
    this.#checkValidUserNumber(userNumber);
    this.#userNumber = userNumber;
  }

  #checkValidUserNumber(userNumber) {
    const userNumbers = userNumber.split('');

    if (!REGEXP.VALID_NUMBER_RANGE.test(userNumber)) {
      throw ERROR_MESSAGE.INVALID_INPUT;
    }

    if (userNumbers.length !== BASEBALL_RANGE.LENGTH) {
      throw ERROR_MESSAGE.INVALID_RANGE;
    }

    if (new Set(userNumbers).size !== BASEBALL_RANGE.LENGTH) {
      throw ERROR_MESSAGE.DUPLICATION_INPUT;
    }

    for (const userNumber of userNumbers) {
      if (userNumber < BASEBALL_RANGE.START || userNumber > BASEBALL_RANGE.END) {
        throw ERROR_MESSAGE.INVALID_RANGE;
      }
    }
  }

  #checkValidComputerNumber(generatedNumber) {
    if (!REGEXP.VALID_NUMBER_RANGE.test(generatedNumber)) {
      throw new Error(ERROR_MESSAGE.INVALID_COMPUTER_NUMBER);
    }
  }

  #checkGeneratedNumber(generatedNumber) {
    if (generatedNumber < BASEBALL_RANGE.START || generatedNumber > BASEBALL_RANGE.END) {
      throw new Error(ERROR_MESSAGE.INVALID_COMPUTER_RANGE);
    }
  }

  #checkComputerNumberLength(computerNumber) {
    if (computerNumber.length !== BASEBALL_RANGE.LENGTH) {
      throw new Error(ERROR_MESSAGE.INVALID_COMPUTER_RANGE);
    }
  }

  #checkComputerNumberDuplication(computerNumber) {
    const uniqueNumbers = new Set(computerNumber.split(''));
    if (uniqueNumbers.size !== BASEBALL_RANGE.LENGTH) {
      throw new Error(ERROR_MESSAGE.INVALID_COMPUTER_RANGE);
    }
  }
}
