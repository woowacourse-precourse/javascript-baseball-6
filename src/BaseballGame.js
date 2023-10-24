
import { MissionUtils } from "@woowacourse/mission-utils";

class BaseballGame {
  computer = [];

  constructor() {
    this.computer = [];
  }

  createComputerNumbers() {
    while (this.computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computer.includes(number)) {
        this.computer.push(number);
      }
    }
  }

  calculateBallAndStrike(userNumbers) {
    const userNumbersArray = Array.from(userNumbers).map(Number);

    let ballCount = 0;
    let strikeCount = 0;

    for (let i = 0; i < 3; i++) {
      if (this.computer[i] === userNumbersArray[i]) {
        strikeCount++;
      } else if (this.computer.includes(userNumbersArray[i])) {
        ballCount++;
      }
    }
    return { ball: ballCount, strike: strikeCount };
  }

  resetComputerNumbers() {
    this.computer = [];
  }
}

export default BaseballGame;