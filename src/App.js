import Game from "./Game.js";

class App {
  async play() {
    try {
      const game = new Game();
      await game.initGame();
    } catch (error) {
      throw error;
    }
  }
}

const app = new App();
app.play();

export default App;
