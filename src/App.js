import { BaseballGame } from './BaseballGame.js';

class App {
  #game;

  async play() {
    this.#game = new BaseballGame();
  }
}

export default App;

const app = new App();
app.play();
