import { MissionUtils } from '@woowacourse/mission-utils';
import * as game from './Game.js';
import { generateRandomBallNumber } from './Ball.js';

class App {
  constructor() {
    this.answer = generateRandomBallNumber();
  }
  async play() {
    game.getInput();
  }
}

const app = new App();

app.play();

export default App;
