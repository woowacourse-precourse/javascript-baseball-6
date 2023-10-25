import Game from "./controller/Game.js";

class App {
  async play() {
    const game = new Game();
    await game.startGame();
  }
}

export default App;
