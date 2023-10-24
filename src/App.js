import BaseBallGame from "../BaseBallGame.js";

class App {
  async play() {
    const game = new BaseBallGame()
    await game.play();
  }
}

const app = new App();
app.play();

export default App;