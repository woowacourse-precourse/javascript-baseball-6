import { MissionUtils } from '@woowacourse/mission-utils';

class BaseballModel {
  constructor() {
    this.targetNumber = [];
    this.userInput = [];
    this.count = 3;
  }
  setUserInput(userInput) {
    this.userInput = userInput.split('');
  }
  generateRandomNumber() {
    this.targetNumber = [];

    while (this.targetNumber.length < this.count) {
      const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.targetNumber.includes(NUMBER)) {
        this.targetNumber.push(NUMBER);
      }
    }
  }
  getStrike() {
    return this.userInput.filter(
      (number, idx) => +number === this.targetNumber[idx]
    ).length;
  }
  getBall() {
    return this.userInput.filter(
      (number, idx) =>
        this.targetNumber.includes(+number) &&
        +number !== this.targetNumber[idx]
    ).length;
  }
}

export default BaseballModel;
