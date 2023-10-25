import Game from "./controllers/Game.js";

class App {
  async play() {
    try {
      const game = new Game();
      await game.start();
    } catch (error) {
      throw error;
    }
  }
}

const app = new App();
app.play();

export default App;
