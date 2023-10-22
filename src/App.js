import { MissionUtils } from '@woowacourse/mission-utils';
import BaseballGame from './BaseballGame';
class App {
  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    const game = new BaseballGame();
    if (!game.gameStart()) {
      return;
    }

    let retryflag = await game.retry();
    while (retryflag === 1) {
      if (!game.gameStart()) {
        return;
      }
      retryflag = await game.retry();
    }
  }
}

export default App;
