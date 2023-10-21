import { MissionUtils } from '@woowacourse/mission-utils';
import { NUMBER_REGEX } from './constants.js';

class BaseballGame {
  constructor() {
    this.targetNumbers = this.generateRandomNumbers();
  }

  generateRandomNumbers() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  async play(userNumbers) {
    this.isValidInput(userNumbers);
  }

  isValidInput(userNumbers) {
    const numberArray = userNumbers.split('').map(Number);

    const isValidNumber = numberArray.every((num) => NUMBER_REGEX.test(num));
    if (!isValidNumber) {
      throw new Error('유효한 숫자를 입력해야 합니다.');
    }

    if (numberArray.length !== 3) {
      throw new Error('3개의 숫자를 입력해야 합니다.');
    }

    if (new Set(numberArray).size !== 3) {
      throw new Error('숫자는 중복되지 않아야 합니다.');
    }

    return true;
  }
}

export default BaseballGame;
