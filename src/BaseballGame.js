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
    if (ball > CONSTANTS.nothing) result += ball + MESSAGES.ball;
    if (strike > CONSTANTS.nothing) result += strike + MESSAGES.strike;
    if (ball === CONSTANTS.nothing && strike === CONSTANTS.nothing) result = MESSAGES.nothing;
    if (strike === CONSTANTS.winningStrike) result += MESSAGES.correct;
    Console.print(result.trim());
  }
  async handleResult({_, strike}) {
    if (strike < CONSTANTS.winningStrike) return this.readNumber();
    await this.readRetry();
  }

  async readRetry() {
    const userInput = Number(await Console.readLineAsync(MESSAGES.restartQuery));
    await this.handleRetry(userInput);
  }
  async handleRetry(userInput) {
    Validator.validateRetry(userInput);
    if (userInput === CONSTANTS.restartValue) return await this.startGame();
  }
}

export default BaseballGame;
