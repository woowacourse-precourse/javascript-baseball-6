import Game from './Game.js';
class App {
  async play() {
    const game = new Game();
    await game.gameStart();
  }
}

export default App;
