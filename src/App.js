import GameController from "./Controller/GameController.js";

class App {
  async play() {
    const gameController = new GameController();
    await gameController.startGame();
  }
}

const app = new App();
app.play();

export default App;
