import { setAnswer, guessJudge, guessOutput } from './answerController';
import { Console } from '@woowacourse/mission-utils';
import { guessInput, restartInput } from './inputController';

class App {
  async play() {
    let answer = await setAnswer();
    while (true) {
      const guess = await guessInput();
      const result = await guessJudge(guess, answer);
      const output = await guessOutput(result);

      Console.print(output);

      if (result.strike === 3) {
        if (await restartInput() === '2') { break }
        else { answer = await setAnswer(); }
      }
    }

  }
}

export default App;
