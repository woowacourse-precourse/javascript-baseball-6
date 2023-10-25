import { BaseballGame } from './BaseballGame.js';

class App {
  async play() {
    const game = new BaseballGame();
    game.init();
  }
}
const app = new App();
app.play();

export default App;
