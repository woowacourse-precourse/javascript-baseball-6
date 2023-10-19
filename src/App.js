import { Game } from "./Game.js";

Game;
class App {
  async play() {
    const newGame = new Game();
  }
}

export default App;

const app = new App();
app.play();
