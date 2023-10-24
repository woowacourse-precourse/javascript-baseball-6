import Game from "./Game.js";
import ERROR from "./error.js";

class App {
  async play() {
    const game = new Game();
    try {
      await game.start();
    } catch (err) {
      throw new Error(`${ERROR.PREFIX} ${err.message}`);
    }
  }
}

export default App;
