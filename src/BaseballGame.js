import {Console} from '@woowacourse/mission-utils';
import MESSAGES from './Messages';
import Computer from './Computer';
import Validator from '../utils/Validator';
import NumberChecker from './NumberChecker';
import CONSTANTS from './Constants';

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
    await this.handleNumber(userNumber);
  }
  async handleNumber(userNumber) {
    Validator.validateUserNumber(userNumber);
    const result = NumberChecker.getResult(userNumber, this.computerNumber);
    this.printResult(result);
    await this.handleResult(result);
  }
  printResult({ball, strike}) {
    let result = '';
    if (ball > 0) result += ball + MESSAGES.ball;
    if (strike > 0) result += strike + MESSAGES.strike;
    if (ball === 0 && strike === 0) result = MESSAGES.nothing;
    if (strike === CONSTANTS.winningStrike) result += MESSAGES.correct;
    Console.print(result.trim());
  }
  async handleResult({_, strike}) {
    if (strike < 3) return this.readNumber();
    await this.readRetry();
  }

  async readRetry() {
    const userInput = Number(await Console.readLineAsync(MESSAGES.restartQuery));
  }
}

export default BaseballGame;
