import {Console} from '@woowacourse/mission-utils';
import MESSAGES from './Messages';
import Computer from './Computer';
import Validator from '../utils/Validator';
import NumberChecker from './NumberChecker';
import CONSTANTS from './Constants';
import InputView from './Views/InputView';

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
    const userNumber = await InputView.readNumber();
    await this.handleNumber(userNumber);
  }
  handleNumber(userNumber) {
    Validator.validateUserNumber(userNumber);
    const result = NumberChecker.getResult(userNumber, this.computerNumber);
    this.printResult(result);
    this.handleResult(result);
  }
  printResult({ball, strike}) {
    let result = '';
    if (ball > CONSTANTS.nothing) result += ball + MESSAGES.ball;
    if (strike > CONSTANTS.nothing) result += strike + MESSAGES.strike;
    if (ball === CONSTANTS.nothing && strike === CONSTANTS.nothing) result = MESSAGES.nothing;
    Console.print(result.trim());
    if (strike === CONSTANTS.winningStrike) Console.print(MESSAGES.correct);
  }
  handleResult({_, strike}) {
    if (strike < CONSTANTS.winningStrike) return this.readNumber();
    this.readRetry();
  }

  async readRetry() {
    const userInput = await InputView.readRetry();
    this.handleRetry(userInput);
  }
  handleRetry(userInput) {
    Validator.validateRetry(userInput);
    if (userInput === CONSTANTS.restartValue) return this.startGame();
  }
}

export default BaseballGame;
