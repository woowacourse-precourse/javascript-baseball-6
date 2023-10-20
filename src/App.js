import Baseball from "./Baseball.js";
import Computer from "./Computer.js";
import ConsoleUtil from "./ConsoleUtil.js";
import User from "./User.js";

class App {
  constructor() {
    this.computer = new Computer();
    this.user = new User();
    this.consoleUtils = new ConsoleUtil();
    this.game = new Baseball(this.computer, this.user, this.consoleUtils);
  }

  async play() {
    await this.game.play();
  }
}

export default App;
