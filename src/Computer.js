import { Random } from '@woowacourse/mission-utils';

class Computer {
  constructor() {
    this.name = 'computer';
  }

  static makeRamdomNum() {
    return (Random.pickNumberInRange(1, 9).toString());
  }

  makeRandomNumList() {
    this.numberList = [];
    let i = 0;
    while (i < 3) {
      const singleNumber = Computer.makeRamdomNum();
      if (this.numberList.includes(singleNumber) === false) {
        this.numberList.push(singleNumber);
        i += 1;
      }
    }
    this.length = this.numberList.length;
  }

  returnComputerRandomNumber() {
    return (this.numberList);
  }
}

export default Computer;
