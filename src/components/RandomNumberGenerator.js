import { Random } from '@woowacourse/mission-utils';

class RandomNumberGenerator {
  constructor() {
    this.randomNumber = [];
  }

  generateRandomNumber() {
    while (this.randomNumber.length < 3) {
      const RANDOM_NUMBER = Random.pickNumberInRange(1, 9);
      if (!this.randomNumber.includes(RANDOM_NUMBER)) {
        this.randomNumber.push(RANDOM_NUMBER);
      }
    }

    return this.randomNumber.join('');
  }
}

export default RandomNumberGenerator;
