import Player from './player/index.js';
import OutputView from './view/OutputView.js';
import { GUIDE_MESSAGES } from '../constants/index.js';

// 숫자야구 어플리케이션의 메인 클래스
class App {
  #player = new Player();

  /**
   * 🖥️ '숫자 야구 게임을 시작합니다.' 메시지와 함께 player 인스턴스를 호출한다.
   * @async
   * @returns
   */
  async play() {
    OutputView.printMessage(GUIDE_MESSAGES.START);
    await this.#player.startGame();
  }
}

export default App;
