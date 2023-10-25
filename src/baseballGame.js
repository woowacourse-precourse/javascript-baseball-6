import { GAME_STATE, GUIDE_MESSAGES } from './constants.js';
import { Console } from '@woowacourse/mission-utils';
import { isValidRestartNumber, isValidUserNumber } from './validation.js';
import { getUniqueNumbersInRange } from './utils.js';

class BaseballGame {
  constructor() {
    this.gameState = GAME_STATE.IN_PROGRESS;
  }

  async playBaseball() {
    this.showGameStartMessage();

    while (this.gameState !== GAME_STATE.END) {
      let computerNumber = await this.createComputerNumber();

      while (this.gameState === GAME_STATE.IN_PROGRESS) {
        const userNumberInput = await Console.readLineAsync(GUIDE_MESSAGES.ENTER_USER_NUMBER);

        const userNumber =
          (await isValidUserNumber(userNumberInput)) &&
          userNumberInput.split('').map((character) => +character);

        const { numberOfStrikes, numberOfBalls } = this.getCountResult(computerNumber, userNumber);
        this.showCountResult(numberOfStrikes, numberOfBalls);

        if (numberOfStrikes === 3) {
          this.gameState = GAME_STATE.FINISH;
          break;
        }
      }

      const restartNumberInput = await Console.readLineAsync(GUIDE_MESSAGES.ENTER_RESTART_NUMBER);
      const restartNumber = (await isValidRestartNumber(restartNumberInput)) && +restartNumberInput;
      this.gameState = restartNumber === 1 ? GAME_STATE.IN_PROGRESS : GAME_STATE.END;
    }
  }

  getCountResult(computerNumber, userNumber) {
    const numberOfStrikes = this.getNumberOfStrikes(computerNumber, userNumber);
    const numberOfBalls = this.getNumberOfBalls(computerNumber, userNumber);
    return { numberOfStrikes, numberOfBalls };
  }

  createComputerNumber() {
    return getUniqueNumbersInRange(1, 9, 3);
  }

  showGameStartMessage() {
    Console.print(GUIDE_MESSAGES.GAME_START);
  }

  showCountResult(numberOfStrikes, numberOfBalls) {
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
      } else {
        Console.print(`${numberOfBalls}볼 ${numberOfStrikes}스트라이크`);
      }
      return;
    }
  }

  getNumberOfStrikes(computerNumber, userNumber) {
    let numberOfStrikes = 0;
    computerNumber.forEach((digit, idx) => {
      if (userNumber.includes(digit) && computerNumber[idx] === userNumber[idx])
        numberOfStrikes += 1;
    });
    return numberOfStrikes;
  }

  getNumberOfBalls(computerNumber, userNumber) {
    let numberOfBalls = 0;
    computerNumber.forEach((digit, idx) => {
      if (userNumber.includes(digit) && computerNumber[idx] !== userNumber[idx]) numberOfBalls += 1;
    });
    return numberOfBalls;
  }
}

export default BaseballGame;
