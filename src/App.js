import BaseballGame from "./BaseballGame";

class App {
  constructor() {
    this.baseballGame = new BaseballGame();
  }
  play() {
    this.baseballGame.startGame();
  }
}

const app = new App();
app.play();
