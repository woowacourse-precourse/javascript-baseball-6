import { MissionUtils } from '@woowacourse/mission-utils';
import game from './game.js';
class App {
  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    game();
  }
}

export default App;
