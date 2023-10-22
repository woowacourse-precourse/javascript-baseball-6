import OutputView from '../View/OutputView.js';
import InputView from '../View/InputView.js';

import Player from '../Model/Player.js';
import Computer from '../Model/Computer.js';
import Hint from '../Model/Hint.js';
import RandomNumbersCreator from '../Model/RandomNumbersCreator.js';

import ErrorCatcher from '../ErrorCatcher.js';

import { RETRY_ORDER } from '../constants/constants.js';

class Controller {
  constructor() {
    this.user = new Player();
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
      OutputView.print(error);
      throw new Error(error);
    }
  }

  async compareUserToComputer() {
    const hint = new Hint();
    hint.createHint(this.user, this.computer);

    await this.printHint(hint);
  }

  async printHint(hint) {
    OutputView.print(hint.getHint());

    if (hint.isAllStrike()) {
      OutputView.printSuccessMessage();
      return await this.readRestart();
    }

    await this.createUserAnswer();
  }

  async readRestart() {
    const retryAnswer = await InputView.readRetry();
    this.validateRetryAnswer(retryAnswer);

    if (retryAnswer === RETRY_ORDER) await this.reStart();
  }

  validateRetryAnswer(answer) {
    try {
      ErrorCatcher.validateOrder(answer);
    } catch (error) {
      OutputView.print(error);
      throw new Error(error);
    }
  }

  async reStart() {
    this.createComputerAnswer();
    await this.createUserAnswer();
  }
}

export default Controller;
