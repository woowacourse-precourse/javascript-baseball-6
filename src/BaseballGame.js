import Computer from './Computer';
import Validator from '../utils/Validator';
import NumberChecker from './NumberChecker';
import CONSTANTS from './Constants';
import InputView from './Views/InputView';
import OutputView from './Views/OutputView';

class BaseballGame {
  computerNumber;

  async play() {
    OutputView.printStart();
    await this.startGame();
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
    this.handleResult(result);
  }

  handleResult(result) {
    OutputView.printResult(result);
    if (result.strike < CONSTANTS.winningStrike) return this.readNumber();
    this.readRetry();
  }

  async readRetry() {
    const userInput = await InputView.readRetry();
    await this.handleRetry(userInput);
  }
  handleRetry(userInput) {
    Validator.validateRetry(userInput);
    if (userInput === CONSTANTS.restartValue) return this.startGame();
  }
}

export default BaseballGame;
