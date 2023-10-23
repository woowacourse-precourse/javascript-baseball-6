import { Baseball } from "./Baseball.js";

class App {
  play() {
    const game = new Baseball();
    game.gameStart();
  }
}

export default App;
