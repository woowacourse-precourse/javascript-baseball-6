import { GUIDE_MESSAGES } from './constants.js';
import { Console } from '@woowacourse/mission-utils';
class App {
  async play() {
    this.showGameStartMessage();
  }
  async showGameStartMessage() {
    Console.print(GUIDE_MESSAGES.GAME_START_MESSAGE);
  }
}

export default App;

const app = new App();
app.play();
