import Game from './Game.js';

class App {
  async play() {
    const game = new Game();
    game.start();
  }
}

export default App;
