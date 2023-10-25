import { MissionUtils } from '@woowacourse/mission-utils';
import { initGame } from './controller.js';

class App {
  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    await initGame();
  }
}

export default App;