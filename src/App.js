import { Console, Random } from '@woowacourse/mission-utils';
import BaseballGame from './BaseballGame';
class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    const game = new BaseballGame();
    let inputFlag;

    while (true) {
      await game.gameStart().catch(() => {
        throw new Error('[ERROR]');
      });
      inputFlag = await game.getRetryAnswer().catch(() => {
        throw new Error('[ERROR]');
      });
      if (inputFlag === '1') {
        continue;
      }
      if (inputFlag === '2') {
        break;
      }
    }
  }
}

export default App;
