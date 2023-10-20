import OutputView from '../View/OutputView.js';
import InputView from '../View/InputView.js';

import User from '../Model/User.js';

import ErrorCatcher from '../ErrorCatcher.js';

class Controller {
  constructor() {
    this.user = new User();
  }

  async init() {
    OutputView.printStartMessage();

    await this.readNumbers();
  }

  async readNumbers() {
    const numbers = await InputView.readNumbers();

    this.validateNumbers(numbers);
  }

  validateNumbers(numbers) {
    try {
      ErrorCatcher.validateType(numbers);
      ErrorCatcher.validateLength(numbers);
      ErrorCatcher.validateUnique(numbers);

      this.setUserAnswer(numbers);
    } catch (error) {
      OutputView.printError(error);
      throw new Error(error);
    }
  }

  setUserAnswer(numbers) {
    this.user.setAnswer(numbers);
  }
}

export default Controller;
