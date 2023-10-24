import { MissionUtils } from '@woowacourse/mission-utils';
import { generateRandomBallNumber } from './Ball.js';
import { messages } from './Message.js';
import * as game from './Game.js';

class App {
  constructor() {
    this.answer = generateRandomBallNumber();
    this.gameMode = 0;
  }
  async play() {
    await MissionUtils.Console.print(messages.GAME_START);
    await game.gameStart();
  }
}

export const app = new App();

app.play();

export default App;
