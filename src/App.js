import NumberBaseballGame from './NumberBaseballGame';

class App {
  constructor(game = new NumberBaseballGame(1, 9, 3)) {
    this.game = game;
  }

  async play() {
    await this.game.play();
  }
}

export default App;
