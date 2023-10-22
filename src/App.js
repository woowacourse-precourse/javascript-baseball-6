import GameManager from "./game/GameManager.js";

class App {
  constructor() {
    this.gameManager = new GameManager();
  }

  async play() {
    this.gameManager.startGame();
  }
}

const app = new App();
app.play();

export default App;
