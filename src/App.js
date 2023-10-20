import { Game } from "./game.js";

class App {
  async play() {
    const newGame = new Game();
  }
}

export default App;

const app = new App();
app.play();
