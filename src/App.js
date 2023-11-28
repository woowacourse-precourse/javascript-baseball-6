import BaseballGameController from './controller/BaseballGameController.js';

class App {
  #baseballGameController = new BaseballGameController();

  async play() {
    this.#baseballGameController.startGame();
  }
}

export default App;

const app = new App();
await app.play();
