import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message';

class InputView {
  async getCost() {
    const { COST } = MESSAGE.inputs;
    const userInput = await Console.readLineAsync(COST);

    this.printNewLine();

    return userInput;
  }

  printNewLine() {
    Console.print('\n');
  }
}

export default InputView;
