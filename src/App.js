import { MissionUtils } from '@woowacourse/mission-utils';
import BaseballGame from './BaseballGame.js';

class App {
  constructor() {
    this.baseBallGame = null;
  }

  gameStartMessage() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  async play() {
    this.gameStartMessage();
    this.baseBallGame = new BaseballGame();
    this.baseBallGame.play();
  }
}

const app = new App();
app.play();

export default App;
