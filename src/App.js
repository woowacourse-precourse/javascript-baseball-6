import { playGame } from "./BaseballGame.js";

class App {
  async play() {
    await playGame();
  }
}

export default App;