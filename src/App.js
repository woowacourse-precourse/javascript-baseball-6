import { Game } from "./features/Game.js";

class App {
  async play() {
    const game = new Game();
    await game.startNewGame();
  }
}

export default App;
