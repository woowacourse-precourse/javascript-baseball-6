import { Console } from '@woowacourse/mission-utils';
import InputValidator from './utils/InputValidator';
import { USER_INPUT_MESSAGE } from './constants/MessageConstants';

export default class User {
  async getInput() {
    const input = await this.readInput();
    this.validateInput(input);
    return this.convertToNumberArray(input);
  }

  async readInput() {
    return await Console.readLineAsync(USER_INPUT_MESSAGE);
  }

  validateInput(input) {
    InputValidator.validateInput(input);
  }

  convertToNumberArray(input) {
    return Array.from(input).map(Number);
  }
}
