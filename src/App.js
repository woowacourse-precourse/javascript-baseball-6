import { MissionUtils } from '@woowacourse/mission-utils';
import Player from './player/index.js';
import Opponent from './opponent/index.js';
const { Console } = MissionUtils;

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.player = new Player();
    this.opponent = new Opponent();
  }
}

const app = new App();

app.play();

export default App;
