import { MissionUtils } from '@woowacourse/mission-utils';
import UserInput from './UserInput.js';

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

  async play() {
    await UserInput.getUserInputAsync();
  }
}

export default BaseballGame;
