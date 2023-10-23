import {Console} from '@woowacourse/mission-utils';
import MESSAGES from './Messages';
import Computer from './Computer';
import Validator from '../utils/Validator';
import NumberChecker from './NumberChecker';

class BaseballGame {
  computerNumber;

  async play() {
    this.printStart();
    await this.startGame();
  }

  printStart() {
    Console.print(MESSAGES.start);
  }
  async startGame() {
    this.generateComputer();
    await this.readNumber();
  }

  generateComputer() {
    this.computerNumber = Computer.generateNumber();
  }

  async readNumber() {
    const userInput = await Console.readLineAsync(MESSAGES.numberQuery);
    const userNumber = userInput.split('').map(Number);
    Validator.validateUserNumber(userNumber);
  }
}

export default BaseballGame;
