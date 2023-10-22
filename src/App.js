import { MissionUtils } from '@woowacourse/mission-utils';
import Player from './player/index.js';

const { Console } = MissionUtils;

class App {
  #player = new Player();

  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    await this.#player.startGame();
  }
}

export default App;
