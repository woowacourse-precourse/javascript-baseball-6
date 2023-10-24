import MESSAGE from '../constants/messages.js';
import InputHandler from '../utils/inputHandler.js';
import RandomGenerator from '../utils/randomGenerator.js';
import { Console } from '@woowacourse/mission-utils';
import inputValidator from '../validator/inputValidator.js';

class GameController {
  constructor() {
    //this.startGame();
  }

  async startGame() {
    Console.print(MESSAGE.GAME.START);
    this.computerNumbers = RandomGenerator.pickRandomNumber(3);
    await this.userInput();
  }

  async userInput() {
    const userNum = await Console.readLineAsync(MESSAGE.GAME.INPUT);
    inputValidator.validateNumber(userNum);
    this.ballCount(userNum);
  }

  async ballCount(userNumbers) {
    this.strike = 0;
    this.ball = 0;
    const userNumbersArray = String(userNumbers).split('').map(Number);
    this.computerNumbers.forEach((computerNumber, i) => {
      if (computerNumber === userNumbersArray[i]) this.strike += 1;
      else if (this.computerNumbers.includes(userNumbersArray[i]))
        this.ball += 1;
    });
    this.printResult(this.strike, this.ball);
  }

  printResult(strike, ball) {
    if (strike === 0 && ball === 0) {
      Console.print(MESSAGE.GAME.RESULT.NOTHING);
    } else if (strike === 0) {
      Console.print(`${ball}${MESSAGE.GAME.RESULT.BALL}`);
    } else if (ball === 0) {
      Console.print(`${strike}${MESSAGE.GAME.RESULT.STRIKE}`);
    } else {
      Console.print(
        `${ball}${MESSAGE.GAME.RESULT.BALL} ${strike}${MESSAGE.GAME.RESULT.STRIKE}`
      );
    }

    if (strike === 3) {
      this.restartGame();
    }
    this.userInput();
  }

  async restartGame() {
    Console.print(MESSAGE.GAME.RESULT.SUCCESS);
  }

  async inputRestartNumber() {
    const num = await Console.readLineAsync(MESSAGE.GAME.END);
    inputValidator.validateRestart(num);
    if (num === 1) {
      await this.startGame();
    } else if (num === 2) {
      return;
    }
  }
}

export default GameController;
