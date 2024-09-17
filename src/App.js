import BaseBallGame from './BaseBallGame.js';

class App {
  async play() {
    this.game = new BaseBallGame();
    await this.game.start();
  }
}

const app = new App();
app.play();

export default App;
