import { GUIDE_MESSAGES } from './constants.js';
import { Console } from '@woowacourse/mission-utils';
import BaseballGame from './baseballGame.js';
class App {
  constructor() {
    this.baseballGame = new BaseballGame();
  }
  async play() {
    await this.baseballGame.playBaseball();
  }
}

export default App;

const app = new App();
app.play();
