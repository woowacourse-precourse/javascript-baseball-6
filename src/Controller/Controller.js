import OutputView from '../View/OutputView.js';
import InputView from '../View/InputView.js';

import User from '../Model/User.js';
import Computer from '../Model/Computer.js';
import HintCounter from '../Model/HintCounter.js';
import RandomNumbersMaker from '../Model/RandomNumbersMaker.js';

import ErrorCatcher from '../ErrorCatcher.js';

class Controller {
  constructor() {
    this.user = new User();
    this.computer = new Computer();

    this.setComputerAnswer();
  }

  setComputerAnswer() {
    const randomNumbersMaker = new RandomNumbersMaker();
    this.computer.setAnswer(randomNumbersMaker.makeNumbers());
  }

  async init() {
    OutputView.printStartMessage();

    await this.readNumbers();
  }

  async readNumbers() {
    const numbers = await InputView.readNumbers();

    this.validateNumbers(numbers);
    await this.setUserAnswer(numbers);
  }

  validateNumbers(numbers) {
    try {
      ErrorCatcher.validateType(numbers);
      ErrorCatcher.validateLength(numbers);
      ErrorCatcher.validateUnique(numbers);
    } catch (error) {
      OutputView.printError(error);
      throw new Error(error);
    }
  }

  async setUserAnswer(numbers) {
    this.user.setAnswer(numbers);

    await this.compareUserToComputer();
  }

  async compareUserToComputer() {
    const hintCounter = new HintCounter();
    hintCounter.countHint(this.user.getAnswer(), this.computer.getAnswer());

    await this.printHint(hintCounter);
  }

  async printHint(hintCounter) {
    OutputView.printMessage(hintCounter.getHint());

    if (hintCounter.isAllStrike()) {
      OutputView.printSuccessMessage();
      return await this.readRetry();
    }

    await this.readNumbers();
  }

  async readRetry() {
    const retryAnswer = await InputView.readRetry();

    this.validateRetryAnswer(retryAnswer);
  }

  validateRetryAnswer(answer) {
    try {
      ErrorCatcher.validateOrder(answer);
    } catch (error) {
      OutputView.printError(error);
      throw new Error(error);
    }
  }
}

export default Controller;
