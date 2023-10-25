import { startGame } from "./components/Game";

class App {
  async play() {
    await startGame();
  }
}

export default App;
