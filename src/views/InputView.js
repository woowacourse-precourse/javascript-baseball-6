import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

class InputView {
  async #getUserInput(prompt) {
    const userInput = await Console.readLineAsync(prompt);

    this.printNewLine();

    return userInput;
  }

  async getCost() {
    const cost = await this.#getUserInput(MESSAGE.inputs.COST);
    return Number(cost);
  }

  async getWinningNumbers() {
    const numbers = await this.#getUserInput(MESSAGE.inputs.WINNING_NUMBER);
    return numbers.split(',').map((num) => Number(num));
  }

  async getBonusNumber() {
    const number = await this.#getUserInput(MESSAGE.inputs.BONUS_NUMBER);
    return Number(number);
  }

  printNewLine() {
    Console.print('\n');
  }
}

export default InputView;
