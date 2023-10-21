import { BaseballGame } from "./BaseballGame.js";

class App {
  async play() {
    const baseballGame =  new BaseballGame();
    baseballGame.startGame();
  }
}

const app = new App();
app.play();

export default App;
