import BaseballGame from "./BaseballGame.js";

class App {
  async play() {
    const game = new BaseballGame();
    return game.start();
  }
}

export default App;
