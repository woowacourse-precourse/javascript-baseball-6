import OutputView from '../View/OutputView.js';
import InputView from '../View/InputView.js';

import User from '../Model/User.js';
import Computer from '../Model/Computer.js';
import Hint from '../Model/Hint.js';
import RandomNumbersCreator from '../Model/RandomNumbersCreator.js';

import { validateNumbers, validateStartOrder } from '../Validator.js';

class Controller {
  constructor() {
    this.user = new User();
    this.computer = new Computer();
  }

  static validate(input, validateFunc) {
    try {
      validateFunc(input);
    } catch (error) {
      OutputView.print(error);
      throw new Error(error);
    }
  }

  async start() {
    OutputView.printStartMessage();

    await this.createAnswers();
  }

  async createAnswers() {
    this.createComputerAnswer();
    await this.readUserAnswer();
  }

  createComputerAnswer() {
    this.computer.createAnswer(new RandomNumbersCreator());
  }

  async readUserAnswer() {
    const numbers = await InputView.readNumbers();
    Controller.validate(numbers, validateNumbers);
    this.user.setAnswer(numbers);

    await this.showHint();
  }

  async showHint() {
    const hint = new Hint();
    hint.createHint(this.user, this.computer);
    OutputView.print(hint.getHint());

    await this.checkSuccess(hint);
  }

  async checkSuccess(hint) {
    if (hint.isAllStrike()) {
      OutputView.printSuccessMessage();
      return await this.readStartOrder();
    }

    await this.readUserAnswer();
  }

  async readStartOrder() {
    const startOrder = await InputView.readStartOrder();
    Controller.validate(startOrder, validateStartOrder);
    this.user.setStartOrder(startOrder);

    if (this.user.wantToStart()) {
      await this.createAnswers();
    }
  }
}

export default Controller;
