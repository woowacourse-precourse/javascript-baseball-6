import { Console } from '@woowacourse/mission-utils';
import { START_MESSAGE } from './constant.js';
import receiveInput from './receiveInput.js';
import validateUserInput from './validateUserInput.js';
import makeAnswer from './makeAnswer.js';
class App {
  async play() {
    Console.print(START_MESSAGE);
    const answer = makeAnswer();
    const userInput = await receiveInput();
    validateUserInput(userInput);
  }
}

export default App;
