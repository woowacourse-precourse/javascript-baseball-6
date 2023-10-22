import BaseballGame from './BaseballGame/index.js';

class App {
  constructor() {
    this.game = new BaseballGame();
  }

  async play() {
    await this.game.start();
  }
}

export default App;
