import { MissionUtils } from '@woowacourse/mission-utils';
import BaseballGame from './BaseballGame';
class App {
  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');

    let errorflag = 0;
    const game = new BaseballGame();
    await game.gameStart().catch(() => {
      errorflag = 1;
    });
    if (errorflag === 1) {
      //MissionUtils.Console.print("[ERROR]");
      throw new Error('[ERROR]');
      return;
    }

    let flag = await game.retry();

    while (flag === 1) {
      await game.gameStart().catch(() => {
        errorflag = 1;
      });
      if (errorflag === 1) {
        //MissionUtils.Console.print("[ERROR]");
        throw new Error('[ERROR]');
        return;
      }
      flag = await game.retry();
    }
  }
}

export default App;
