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
    await this.inputUserNumber();
  }

  async inputUserNumber() {
    await InputHandler.userInput((input) => {
      inputValidator.validateNumber(input);
      Console.print('여기까진 왔니?');
      this.ballCount();
    });
  }

  async inputRestartNumber() {
    await InputHandler.inputRestartNumber((input) => {
      inputValidator.validateRestart(input);
      if (input === 1) {
        this.restartGame();
      }
      if (input === 2) return;
    });
  }

  ballCount() {
    const strike = 0;
    const ball = 0;
    Console.print('여기까지 왔어');
    this.computerNumbers.forEach((computerNumber, i) => {
      if (computerNumber === user[i]) strike += 1;
      else if (this.computerNumbers.includes(user[i])) ball += 1;

      return this.printResult(strike, ball);
    });
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
      Console.print(MESSAGE.GAME.RESULT.SUCCESS);
      return this.inputRestartNumber();
    }
  }
}

export default GameController;
