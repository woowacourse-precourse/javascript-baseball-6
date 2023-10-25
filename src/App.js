import BaseballGame from "./BaseballGame.js";

class App {
  async play() {
    this.game = new BaseballGame();
    await this.game.init();
  }
}

export default App;

const app = new App();
app.play();
