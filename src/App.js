import BaseballGame from "./BaseballGame.js";

class App {
  constructor() {
    this.baseballGame = new BaseballGame();
  }

  async play() {
    await this.baseballGame.startGame();
  }
}

export default App;
