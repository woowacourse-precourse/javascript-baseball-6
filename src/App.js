import BaseballController from "./Controller/BaseballController";

class App {
  #BASEBALL_GAME = new BaseballController();

  get Game() {
    return this.#BASEBALL_GAME;
  }

  async play() {
    await this.Game.startGame();
  }
}

export default App;
