import { startGame } from "./utils/Game";

class App {
  async play() {
    await startGame();
  }
}

export default App;
