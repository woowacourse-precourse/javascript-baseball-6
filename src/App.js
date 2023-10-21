import Baseball from "./Baseball.js";
import Computer from "./Computer.js";
import ConsoleUtils from "./ConsoleUtils.js";
import User from "./User.js";
import MESSAGE from "./constant/MESSAGE.js";
import ERROR from "./constant/ERROR.js";

class App {
  constructor() {
    this.consoleUtils = new ConsoleUtils();
    this.computer = new Computer();
    this.user = new User(this.consoleUtils);
    this.game = new Baseball(this.computer, this.user, this.consoleUtils);
    this.isAppRunning = true;
  }

  async play() {
    this.startApp();
    while (this.isAppRunning) {
      const shouldContinue = await this.replayGame();
      if (!shouldContinue) this.isAppRunning = false;
    }
  }

  startApp() {
    this.consoleUtils.print(MESSAGE.START_GAME);
  }

  async replayGame() {
    const isGameFinished = !(await this.game.play());

    if (isGameFinished) {
      return this.handleGameRestartOrExit();
    }
  }

  async handleGameRestartOrExit() {
    const answer = await this.consoleUtils.readLineAsync(
      MESSAGE.ASK_GAME_RESTART
    );

    if (answer === "2") return false;
    if (answer === "1") return true;

    throw new Error(ERROR.VALID_RESTART_INPUT);
  }
}

export default App;
