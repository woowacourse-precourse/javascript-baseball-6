import GameView from "./gameView.js";
class App {
  constructor() {
    this.view = new GameView();
  }

  async play() {
    this.view.printGameStartMessage();
  }
}

const app = new App();
app.play();

export default App;
