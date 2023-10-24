import BaseballGame from "./BaseballGame.js";

class App {
  async play() {
    try {
      const game = new BaseballGame();
      await game.start();
    } catch (error) {
      throw error;
    }
  }
}

export default App;
