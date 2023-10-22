import Game from "./Game.js";

class App {
  async play() {
    try {
      const game = new Game();
      await game.start();
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

const app = new App();
app.play();

export default App;
