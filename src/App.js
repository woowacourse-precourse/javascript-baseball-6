import { Console } from '@woowacourse/mission-utils';
import setAnswer from './setAnswer';
import guessInput from './guessInput';
import guessJudge from './guessJudge';
import guessOutput from './guessOutput';
import restartInput from './restartInput';

class App {
  #answer;
  #guess;
  #isEnded;
  
  constructor() {
    this.#answer = [];
    this.#guess = "";
    this.#isEnded = false;
  }

  async play() {
    this.setAnswer();

    while (true) {
      await this.setGuess();
      const result = await guessJudge(this.#guess, this.#answer);
      const output = await guessOutput(result);
      Console.print(output);

      if (result.strike === 3) {
        if (await restartInput() === '2') {
          break
        } else {
          this.setAnswer();
        }
      }
    }
  }

  async setAnswer() {
    this.#answer = await setAnswer();
  }

  async setGuess() {
    this.#guess = await guessInput();
  }
}
//@TODO : class로 만들어 객체지향형으로 만들기
//@TODO : readme 정리하기

export default App;
