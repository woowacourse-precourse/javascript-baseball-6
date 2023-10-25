import GameManager from "./game/GameManager.js";

class App {
  constructor() {
    this.gameManager = new GameManager();
  }

  async play() {
    this.gameManager.startGame();
  }
}

export default App;
