import { GameController } from "./GameController.js";

class App {
  constructor() {
    this.gameController = new GameController();
  }
  async play() {
    this.gameController.startGame();
  }
}
const app = new App();
app.play();
export default App;
