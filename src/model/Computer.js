import { Random } from '@woowacourse/mission-utils';

export default class Computer {
  constructor() {
    this.number = null;
  }

  /**
   * Computer 클래스에 저장된 값을 가져옵니다.
   * @returns [컴퓨터가 설정한 수]
   */
  getNumber() {
    return this.number;
  }

  /**
   * computer가 설정한 수를 Computer 클래스에 저장합니다.
   * @param {string[]} newNumber [컴퓨터가 설정한 수]
   */
  setNumber(newNumber) {
    this.number = newNumber;
  }

  /**
   * 서로 다른 3개의 수를 string형태로 배열에 담은 후 변수에 저장합니다.
   */
  chooseRandomNumber() {
    const numbers = [];

    while (numbers.length < 3) {
      const randomNumberToString = String(Random.pickNumberInRange(1, 9));
      if (!numbers.includes(randomNumberToString)) {
        numbers.push(randomNumberToString);
      }
    }
    
    this.setNumber(numbers);
  }
}
