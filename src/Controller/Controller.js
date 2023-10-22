import OutputView from '../View/OutputView.js';
import InputView from '../View/InputView.js';

import Player from '../Model/Player.js';
import Computer from '../Model/Computer.js';
import Hint from '../Model/Hint.js';
import RandomNumbersCreator from '../Model/RandomNumbersCreator.js';

import { validateNumbers, validateRetry } from '../Validator.js';

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

  static validate(input, validateFunc) {
    try {
      validateFunc(input);
    } catch (error) {
      OutputView.print(error);
      throw new Error(error);
    }
  }

  async createUserAnswer() {
    const numbers = await InputView.readNumbers();
    Controller.validate(numbers, validateNumbers);
    this.user.setAnswer(numbers);

    await this.compareUserToComputer();
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
    Controller.validate(retryAnswer, validateRetry);

    if (retryAnswer === RETRY_ORDER) await this.reStart();
  }

  async reStart() {
    this.createComputerAnswer();
    await this.createUserAnswer();
  }
}

export default Controller;
