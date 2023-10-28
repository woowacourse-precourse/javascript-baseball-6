import Player from './player/index.js';
import OutputView from './view/OutputView.js';
import { GUIDE_MESSAGES } from '../constants/index.js';

// 숫자야구 어플리케이션의 메인 클래스
class App {
  #player = new Player();

  async play() {
    OutputView.printMessage(GUIDE_MESSAGES.start);
    await this.#player.startGame();
  }
}

export default App;
