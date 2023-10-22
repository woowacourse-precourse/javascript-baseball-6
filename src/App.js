import BaseballGame from './BaseballGame.js';

class App {
  async play() {
    const game = new BaseballGame();
    await game.start();
  }
}

export default App;
