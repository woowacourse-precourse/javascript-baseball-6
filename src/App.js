import BaseballGame from "./BaseballGame.js";

class App {
  async play() {
    new BaseballGame();
  }
}

export default App;

const app = new App();
app.play();
