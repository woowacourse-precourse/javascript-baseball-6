import BaseballGame from './BaseballGame.js';
import { Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    const game = await new BaseballGame();
  }
}

const app = new App();
app.play();

export default App;
