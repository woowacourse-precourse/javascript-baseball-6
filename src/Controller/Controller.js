import OutputView from '../View/OutputView.js';
import InputView from '../View/InputView.js';

import User from '../Model/User.js';
import Computer from '../Model/Computer.js';
import HintCounter from '../Model/HintCounter.js';
import RandomNumbersCreator from '../Model/RandomNumbersCreator.js';

import ErrorCatcher from '../ErrorCatcher.js';

import { RETRY_ORDER } from '../constants/constants.js';

class Controller {
  constructor() {
    this.user = new User();
    this.computer = new Computer();
  }

  createComputerAnswer() {
    this.computer.createAnswer(new RandomNumbersCreator());
  }

  async init() {
    OutputView.printStartMessage();
    this.createComputerAnswer();

    await this.createUserAnswer();
  }

  async createUserAnswer() {
    const numbers = await InputView.readNumbers();
    this.validateNumbers(numbers);
    this.user.setAnswer(numbers);

    await this.compareUserToComputer();
  }

  validateNumbers(numbers) {
    try {
      ErrorCatcher.validateLength(numbers);
      ErrorCatcher.validateType(numbers);
      ErrorCatcher.validateUnique(numbers);
    } catch (error) {
      OutputView.printError(error);
      throw new Error(error);
    }
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

    await this.createUserAnswer();
  }

  async readRetry() {
    const retryAnswer = await InputView.readRetry();

    this.validateRetryAnswer(retryAnswer);

    if (retryAnswer === RETRY_ORDER) {
      await this.reStart();
    }
  }

  validateRetryAnswer(answer) {
    try {
      ErrorCatcher.validateOrder(answer);
    } catch (error) {
      OutputView.printError(error);
      throw new Error(error);
    }
  }

  async reStart() {
    this.createComputerAnswer();
    await this.createUserAnswer();
  }
}

export default Controller;
