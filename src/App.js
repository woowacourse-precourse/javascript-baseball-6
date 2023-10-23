import Game from "./Game.js";

class App {
  async play() {
    const game = new Game();
    try {
      await game.start();
    } catch (err) {
      throw new Error(`[ERROR] ${err.message}`);
    }
  }
}

export default App;
