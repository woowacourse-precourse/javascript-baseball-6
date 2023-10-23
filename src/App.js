import GameController from './game/GameController.js';

class App {
  constructor() {
    this.gameMain = new GameController();
  }

  async play() {
    await this.gameMain.startGame();
}

}

export default App;

const app = new App();
app.play();