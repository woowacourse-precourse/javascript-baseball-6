import { NUMBER_LENGTH } from './constants.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import { Console } from '@woowacourse/mission-utils';

export class User {
  constructor(numbers) {
    this.numbers = numbers;
  }
  setRandomNumbers() {
    const numbers = [];
    while (numbers.length < NUMBER_LENGTH) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    this.numbers = numbers;
  }

  async setInputNumbers() {
    const strNumbers = await Console.readLineAsync('숫자를 입력해주세요 : ');
    const numbers = [];
    if (strNumbers.length !== NUMBER_LENGTH) {
      throw new Error('[ERROR] 3자리 숫자를 입력해주세요');
    }
    strNumbers.split('').map((strNumber) => {
      const number = Number(strNumber);
      if (Number.isNaN(number)) {
        throw new Error('[ERROR] 숫자를 입력해주세요');
      } else if (numbers.includes(number)) {
        throw new Error('[ERROR] 중복되지 않은 숫자를 입력해주세요');
      }
      numbers.push(number);
    });
    this.numbers = numbers;
  }
}
