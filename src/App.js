import { BaseballGame } from "./BaseballGame";
import { GAME_ACTIONS } from "./constants";

class App {
  async play() {
    const baseballGame = new BaseballGame();

    while (true) {
      await baseballGame.start();
      const action = await baseballGame.getActionFromInput();
      if (action === GAME_ACTIONS.EXIT) break;
    }
  }
}

export default App;
