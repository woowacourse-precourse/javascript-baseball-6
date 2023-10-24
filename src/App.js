import BaseballGame from "./BaseballGame.js";

export default class App {
  async play() {
    this.game = await new BaseballGame();
    await this.game.play();
  }
}

const app = new App();
app.play();
