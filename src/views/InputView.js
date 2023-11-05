import { Console } from '@woowacourse/mission-utils';

class InputView {
  static async readUserInput(message) {
    const userInput = await Console.readLineAsync(message);
    return userInput;
  }
}

export default InputView;
