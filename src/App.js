import { setAnswer, guessJudge, guessOutput } from './answerController.js';
import { Console } from '@woowacourse/mission-utils';
import { guessInput, restartInput } from './inputController.js';

class App {
  async play() {
    let answer = await setAnswer();
    while (true) {
      let guess = await guessInput();
      // Console.print(guess);
      // Console.print(answer);
      
      let result = await guessJudge(guess, answer);
      // Console.print(result);

      let output = await guessOutput(result);
      Console.print(output);

      if (result.strike==3) {
        if (await restartInput()=='2') {break}
        else {answer = await setAnswer()}
      }
    }
    
  }
}

export default App;
