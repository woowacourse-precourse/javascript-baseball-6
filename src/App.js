import GameController from "./baseballGame/GameController";

class App {
  async play() {
    const gameController = new GameController();
    await gameController.start();
  }
}

export default App;
