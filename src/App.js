import BaseballGame from "./BaseballGame/BaseballGame";

class App {
  #baseballGame = new BaseballGame();

  constructor() {}

  async play() {
    await this.#baseballGame.startGame();
  }
}

export default App;
