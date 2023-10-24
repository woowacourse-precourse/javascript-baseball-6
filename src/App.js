import NumberBaseballGameController from './controller/NumberBaseballGameController.js';

class App {
  #numberBaseballGameController = new NumberBaseballGameController();

  async play() {
    await this.#numberBaseballGameController.gameStart();
  }
}

export default App;
