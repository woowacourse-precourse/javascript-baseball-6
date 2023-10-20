const GamePlay = require('./views/GamePlay');

class App {
  constructor() {
    this.GAME = new GamePlay();

  }
  async play() {
    this.GAME.startGame();
  }
}

export default App;
