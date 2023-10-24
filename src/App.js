import { BaseballGame } from "./BaseballGame";

class App {
  async play() {
    const baseballGame = new BaseballGame();

    while (true) {
      await baseballGame.start();
      const action = await baseballGame.askForRestartOrExit();
      if (action === "exit") break;
    }
  }
}

export default App;
