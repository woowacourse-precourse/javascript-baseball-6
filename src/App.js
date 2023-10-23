import { Console } from '@woowacourse/mission-utils';
import { GUIDE_MESSAGES } from '../constants/index.js';
import Player from './player/index.js';

//숫자야구 어플리케이션의 메인 클래스
class App {
  #player = new Player();

  /**
   * @async
   * @returns {void}
   */
  async play() {
    Console.print(GUIDE_MESSAGES.START);
    await this.#player.startGame();
  }
}

export default App;
