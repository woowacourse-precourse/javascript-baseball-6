import GameController from "./Controller/GameController.js";

class App {
  async play() {
    const gameController = new GameController();
    await gameController.startGame();
  }
}

export default App;
