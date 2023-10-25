import { BaseballGame } from './BaseballGame.js';

class App {
  async play() {
    const game = new BaseballGame();
    await game.initialStart();
  }
}

export default App;
