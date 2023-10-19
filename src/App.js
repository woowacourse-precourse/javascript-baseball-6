import BaseballGame from "./BaseballGame.js";

class App {
  constructor() {
    this.baseballGame = new BaseballGame();
  }
  async play() {
    this.baseballGame;
  }
}

const app = new App();
app.play();

export default App;
