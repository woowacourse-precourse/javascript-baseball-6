import { Console } from '@woowacourse/mission-utils';
import { END_MESSAGE, START_MESSAGE } from './constant.js';
import receiveInput from './receiveInput.js';
import validateUserInput from './validateUserInput.js';
import makeAnswer from './makeAnswer.js';
import checkInputWithAnswer from './checkInputWithAnswer.js';
import printResult from './printResult.js';

class App {
  async play() {
    Console.print(START_MESSAGE);
    const answer = makeAnswer();
    let checkResult = {strike: 0, ball: 0, nothing: 0};
    while (checkResult.strike !== 3){
      const userInput = await receiveInput();
      validateUserInput(userInput);
      checkResult = checkInputWithAnswer(answer, userInput);
      printResult(checkResult);
    }
    Console.print(END_MESSAGE);
  }
}

export default App;
