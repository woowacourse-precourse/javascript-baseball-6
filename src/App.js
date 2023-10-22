import { Console } from '@woowacourse/mission-utils';
import {
  generateRandomThreeDigits,
  guessDigitsUntilCorrect,
  getUserRestartChoice,
} from './utils.js';

class App {
  async play() {
    let shouldRestart;
    Console.print('숫자 야구 게임을 시작합니다.');
    do {
      // 랜덤으로 답을 생성한다.
      const answerDigits = generateRandomThreeDigits();

      // 맞을때까지 유저가 예상하는 답을 입력받는다.
      await guessDigitsUntilCorrect(answerDigits);

      // 더 할 건지 묻고 의사에 따라 재시작하거나 끝낸다.
      const choice = await getUserRestartChoice();
      shouldRestart = choice === 'RESTART' ? true : false;
    } while (shouldRestart);
  }
}

try {
  const app = new App();
  app.play();
} catch (e) {
  Console.print(e);
}

export default App;
