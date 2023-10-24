import BaseballGame from './BaseballGame.js';
import { Console } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.game = new BaseballGame();
  }

  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    await this.game.startGame();
  }
}

const app = new App();
app.play();

export default App;
