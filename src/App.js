import Game from "./Game/Game.js";
class App {
  constructor() {
    this.game = new Game();
  }

  play() {
    return this.game.start().catch((error) => {
      throw error;
    });
  }
}

const app = new App();
app.play();

export default App;
