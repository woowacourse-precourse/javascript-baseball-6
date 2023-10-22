import { Random } from '@woowacourse/mission-utils';

class Computer {
  constructor() {
    /** @type {number[]} */
    this.computer = [];
  }

  /**
   * 1~9까지 수 중에서 랜던한 3개의 숫자 리턴하는 함수
   * @returns {number[]} 랜덤한 3개의 숫자 배열 형태로 리턴
   */
  getNumber() {
    while (this.computer.length < 3) this.createRandomNumber();
    return this.computer;
  }

  /**
   * 1~9까지 수 중에서 중복없이 3개의 랜덤한 숫자 뽑는 함수
   */
  createRandomNumber() {
    const number = Random.pickNumberInRange(1, 9);
    if (!this.computer.includes(number)) this.computer.push(number);
  }
}

export default Computer;
