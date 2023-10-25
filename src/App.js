import BaseballGame from './BaseballGame.js';
import { Console } from '@woowacourse/mission-utils';
import { LOG_MESSAGE } from './constants.js';
import { printMessage } from './utils.js'

class App {
  constructor() {
    this.game = new BaseballGame();
  }

  async play() {
    printMessage(LOG_MESSAGE.START_GAME);
    await this.game.startGame();
  }
}

const app = new App();
app.play();

export default App;
