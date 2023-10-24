import BaseballGame from "./BaseballGame";

class App {
  async play() {
    const game = new BaseballGame();
    await game.init();
  }
}

const app = new App();
app.play();

export default App;
