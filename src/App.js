import GameLogic from "./game/GameLogic.js";

class App {
  #gameLogic;

  constructor() {
    this.#gameLogic = new GameLogic();
  }

  async play() {}
}

const app = new App();
app.play();

export default App;
