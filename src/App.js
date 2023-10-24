import { Console } from '@woowacourse/mission-utils';
import Player from './Player.js';

class App {
  #player = new Player();

  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    await this.#player.startGame();
  }
}

const app = new App();
app.play();

export default App;
