import { Console } from '@woowacourse/mission-utils';

class View {
  infoPrint(message) {
    Console.print(message);
  }

  async userInput(message) {
    const inputValue = await Console.readLineAsync(message);
    return inputValue;
  }
}

export default View;
