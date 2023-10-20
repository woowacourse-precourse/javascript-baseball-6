import OutputView from '../View/OutputView.js';
import InputView from '../View/InputView.js';
import ErrorCatcher from '../ErrorCatcher.js';

class Controller {
  constructor() {}

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
    } catch (error) {
      OutputView.printError(error);
      throw new Error(error);
    }
  }
}

export default Controller;
