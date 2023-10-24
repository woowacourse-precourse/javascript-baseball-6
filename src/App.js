import BaseballGame from "./BaseballGame";

class App {
  async play() {
    const game = new BaseballGame();
    await game.init();
  }
}

export default App;
