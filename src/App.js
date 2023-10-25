import { BaseballGame } from './BaseballGame.js';

class App {
  async play() {
    const game = new BaseballGame();
    game.startGame();
  }
}

export default App;
