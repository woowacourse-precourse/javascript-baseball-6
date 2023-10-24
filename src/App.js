import baseballGame from "./baseballGame/baseballGame.js";

class App {
  async play() {
    await baseballGame();
  }
}

export default App;
