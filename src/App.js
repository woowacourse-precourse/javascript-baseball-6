import Baseball from "./Baseball.js";
import Computer from "./Computer.js";
import ConsoleUtils from "./ConsoleUtils.js";
import User from "./User.js";

class App {
  constructor() {
    this.consoleUtils = new ConsoleUtils();
    this.computer = new Computer();
    this.user = new User(this.consoleUtils);
    this.game = new Baseball(this.computer, this.user, this.consoleUtils);
  }

  async play() {
    await this.game.play();
  }
}

export default App;
