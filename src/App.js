// App.js
import Game from "./Game/Game.js";

class App {
  constructor() {
    this.game = new Game();
  }

  play() {
    return this.game.start().catch((error) => {
      console.error(error);
      throw error;
    });
  }
}

export default App;
