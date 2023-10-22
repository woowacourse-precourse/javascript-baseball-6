import Game from "./Game.js";

class App {
  async play() {
    this.game = new Game();
    this.game.start();
  }
}

export default App;

const app = new App();
app.play();
