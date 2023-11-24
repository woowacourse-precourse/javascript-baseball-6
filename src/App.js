import BaseBallGameController from './controller/BaseBallGameController.js';

class App {
  #baseBallGameController = new BaseBallGameController();

  async play() {
    this.#baseBallGameController.startGame();
  }
}

export default App;

const app = new App();
await app.play();
