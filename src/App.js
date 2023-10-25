import { Game } from "./features/Game.js";

class App {
  async play() {
    const game = new Game();
    await game.startNewGame();
  }
}

const app = new App();
app.play();

export default App;
