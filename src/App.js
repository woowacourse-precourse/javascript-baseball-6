import Game from './game.js';

class App {
  async play() {
    const game = new Game();
    game.start();
  }
}

export default App;
