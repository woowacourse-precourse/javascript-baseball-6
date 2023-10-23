import { Console } from '@woowacourse/mission-utils';
import { START_MESSAGE } from './constant.js';
import receiveInput from './receiveInput.js';
import validateUserInput from './validateUserInput.js';
class App {
  async play() {
    Console.print(START_MESSAGE);
    const userInput = await receiveInput();
    validateUserInput(userInput);
  }
}

export default App;
