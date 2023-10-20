import Baseball from "./Baseball.js";

class App {
  constructor() {
    this.game = new Baseball();
  }

  async play() {
    await this.game.play();
  }
}

export default App;
