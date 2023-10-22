import Controller from './Controller/index.js';
import BaseballGame from './BaseballGame/index.js';

class App {
  constructor() {
    this.controller = new Controller(new BaseballGame());
  }

  async play() {
    await this.controller.play();
  }
}

export default App;
