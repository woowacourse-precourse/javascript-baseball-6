import { Console, Random } from '@woowacourse/mission-utils';
import BaseballGame from './BaseballGame';
class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    const game = new BaseballGame();
    let errorflag = 0;
    let flag = 1;

    while (Number(flag) === 1) {
      await game.gameStart().catch(() => {
        errorflag = 1;
      });
      if (errorflag === 1) {
        throw new Error('[ERROR]');
      }
      flag = await game.retry();
      if (!(Number(flag) === 1 || Number(flag) === 2)) {
        throw new Error('[ERROR]');
      }
    }
  }
}

export default App;
