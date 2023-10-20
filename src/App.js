import Game from "./Game.js";

class App {
  async play() {
    const game = new Game();
    await game.startGame();
  }
}

export default App;

const app = new App();
app.play();
