import { Game } from './controllers/index.js';

class App {
  game = new Game();

  async play() {
    this.game.start();
    while (true) {
      await this.game.play();
      if (this.game.getProgress() === 'end') break;
    }
  }
}
export default App;
