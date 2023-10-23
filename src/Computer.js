import { CONSTANT, RESULT } from './Constant.js';
import { Random } from '@woowacourse/mission-utils';

class Computer {
  #randomNumber;
  constructor() {
    this.#randomNumber = this.#setRandomNumbers();
  }

  #setRandomNumbers() {
    const randomNumbers = [];
    while (randomNumbers.length < CONSTANT.MAX_NUM_LEN) {
      const newNumber = Random.pickNumberInRange(1, 9);
      if (!randomNumbers.includes(newNumber)) {
        randomNumbers.push(newNumber);
      }
    }
    return randomNumbers;
  }

  compareUserNumbersWithRandomNumber(userNumbers) {
    const numsOfStrike = this.#countStrike(userNumbers);
    const numsOfBall = this.#countBall(userNumbers);
    return this.#makeResultString(numsOfStrike, numsOfBall);
  }

  #countStrike(userNumbers) {
    return userNumbers.reduce((acc, cur, i) => {
      if (cur === this.#randomNumber[i]) return acc + 1;
      return acc;
    }, 0);
  }

  #countBall(userNumbers) {
    return userNumbers.reduce((acc, cur, i) => {
      const index = this.#randomNumber.indexOf(cur);
      if (index !== i && index >= 0) {
        return acc + 1;
      }
      return acc;
    }, 0);
  }

  #makeResultString(strike, ball) {
    let result = [];
    if (!strike && !ball) return RESULT.NOTHING;
    if (ball) result.push(ball + RESULT.BALL);
    if (strike) result.push(strike + RESULT.STRIKE);
    return result.join(' ');
  }
}

export default Computer;
