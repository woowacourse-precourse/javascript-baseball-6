import { MissionUtils } from '@woowacourse/mission-utils';
import BaseballGame from './BaseballGame.js';
import { GAME_MESSAGES } from './constants.js';

class App {
  constructor() {
    this.baseBallGame = null;
  }

  gameStartMessage() {
    MissionUtils.Console.print(GAME_MESSAGES.START);
  }

  async play() {
    this.gameStartMessage();
    this.baseBallGame = new BaseballGame();
    await this.baseBallGame.play();
  }
}

const app = new App();
app.play();

export default App;
