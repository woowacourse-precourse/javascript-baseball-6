import { Random } from '@woowacourse/mission-utils';

class Computer {
  constructor() {
    this.computerNumber = this.generateRandomNumber();
  }

  generateNewCorrectNumber() {
    this.computerNumber = this.generateRandomNumber();
  }

  generateRandomNumber() {
    const computerArray = [];

    while (computerArray.length < 3) {
      const newComputerNumber = Random.pickNumberInRange(1, 9);

      if (!computerArray.includes(newComputerNumber)) {
        computerArray.push(newComputerNumber);
      }
    }

    return computerArray.join('');
  }
}

export default Computer;
