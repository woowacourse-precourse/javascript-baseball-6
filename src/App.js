import { Console } from '@woowacourse/mission-utils';
import setAnswer from './setAnswer';
import guessInput from './guessInput';
import guessJudge from './guessJudge';
import guessOutput from './guessOutput';
import restartInput from './restartInput';

class App {
  async play() {
    let answer = await setAnswer();

    while (true) {
      const guess = await guessInput();
      const result = await guessJudge(guess, answer);
      const output = await guessOutput(result);
      Console.print(output);

      if (result.strike === 3) {
        if (await restartInput() === '2') {
          break
        } else {
          answer = await setAnswer();
        }
      }
    }
  }
}
//@TODO : class로 만들어 객체지향형으로 만들기
//@TODO : readme 정리하기

export default App;
