import BaseballGame from "./baseballGame.js";

class App {
  async play() {
    try {
      const game = new BaseballGame();
      await game.play();
    } catch (error) {
      throw error;
    }
  }
}

const app = new App();
app.play();
export default App;
