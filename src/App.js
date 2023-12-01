import BaseballGameController from './controller/BaseballGameController.js';

class App {
  #baseballGameController = new BaseballGameController();

  async play() {
    await this.#baseballGameController.startGame();
  }
}

export default App;
