import { Console } from '@woowacourse/mission-utils';
import ErrorChecker from './ErrorChecker.js';
import { REQUEST_NUMBER } from './Constants.js';

export default class UserInput {
  async getInput() {
    const input = await this.readInput();
    this.validateInput(input);
    return this.convertToNumberArray(input);
  }

  async readInput() {
    return await Console.readLineAsync(REQUEST_NUMBER);
  }

  validateInput(input) {
    ErrorChecker.validateInput(input);
  }

  convertToNumberArray(input) {
    return Array.from(input).map(Number);
  }
}
