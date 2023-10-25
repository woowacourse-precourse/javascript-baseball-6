import { Random } from '@woowacourse/mission-utils';

class Generator {
  constructor() {
    this.computerNumber = this.generateRandomNumber();
  }

  generateNewCorrectNumber() {
    this.computerNumber = this.generateRandomNumber();
  }

  generateRandomNumber() {
    const generatedNumber = new Set();

    while (generatedNumber.size < 3) {
      const newComputerNumber = Random.pickNumberInRange(1, 9);
      generatedNumber.add(newComputerNumber);
    }

    return Array.from(generatedNumber).join('');
  }
}

export default Generator;
