import printGameStartMessage from './startup.js';
import printGameShutdownMessage from './shutdown.js';
import Game from './Game.js';
import { SHUTDOWN_GAME } from './utils.js';

class App {
  async play() {
    let shouldPlayGame = true;

    printGameStartMessage();

    while (shouldPlayGame) {
      const game = new Game();
      await game.play();

      const shouldRestartGame = await Game.askToRestartGame();
      if (shouldRestartGame === SHUTDOWN_GAME) {
        shouldPlayGame = false;
      }
    }

    printGameShutdownMessage();
  }
}

export default App;
