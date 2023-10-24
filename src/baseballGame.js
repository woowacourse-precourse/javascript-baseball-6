import { GUIDE_MESSAGES } from './constants.js';
import { Console } from '@woowacourse/mission-utils';
import { isValidUserNumber } from './validation.js';
import { getUniqueNumbersInRange } from './utils.js';

class BaseballGame {
  constructor() {
    this.computerNumber = 0;
    this.userNumber = 0;
  }

  async playBaseball() {
    this.showGameStartMessage();
    this.createComputerNumber();
    await this.getUserNumber();
    this.showCountResult();
  }

  showGameStartMessage() {
    Console.print(GUIDE_MESSAGES.GAME_START);
  }

  createComputerNumber() {
    this.computerNumber = getUniqueNumbersInRange(1, 9, 3);
    Console.print(this.computerNumber);
  }

  async getUserNumber() {
    const userInput = await Console.readLineAsync(GUIDE_MESSAGES.ENTER_USER_NUMBER);
    this.userNumber =
      isValidUserNumber(userInput) && userInput.split('').map((character) => +character);
  }

  showCountResult() {
    const numberOfStrikes = this.getNumberOfStrikes();
    const numberOfBalls = this.getNumberOfBalls();

    if (numberOfStrikes === 0 && numberOfBalls === 0) {
      Console.print(GUIDE_MESSAGES.NONE_MATCHING);
      return;
    }

    if (numberOfBalls === 0) {
      Console.print(`${numberOfStrikes}스트라이크`);
      if (numberOfStrikes === 3) Console.print(GUIDE_MESSAGES.GAME_FINISH);
      return;
    } else {
      if (numberOfStrikes === 0) {
        Console.print(`${numberOfBalls}볼`);
        return;
      } else {
        Console.print(`${numberOfBalls}볼 ${numberOfStrikes}스트라이크`);
        return;
      }
    }
  }

  getNumberOfStrikes() {
    let numberOfStrikes = 0;
    this.computerNumber.forEach((digit, idx) => {
      if (this.userNumber.includes(digit) && this.computerNumber[idx] === this.userNumber[idx])
        numberOfStrikes += 1;
    });
    return numberOfStrikes;
  }

  getNumberOfBalls() {
    let numberOfBalls = 0;
    this.computerNumber.forEach((digit, idx) => {
      if (this.userNumber.includes(digit) && this.computerNumber[idx] !== this.userNumber[idx])
        numberOfBalls += 1;
    });
    return numberOfBalls;
  }
}

export default BaseballGame;
