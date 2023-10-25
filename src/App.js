import GameController from './controller/GameController.js';

class App {
  #gameController;

  constructor() {
    this.#gameController = new GameController();
  }

  async play() {
    await this.#gameController.run();
  }
}

const app = new App();
app.play();

export default App;
