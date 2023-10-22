const GameController = require("../controller/GameController");

class App {
  gameController = new GameController();
  async play() {
    this.gameController.startGame();
  }
}

export default App;
