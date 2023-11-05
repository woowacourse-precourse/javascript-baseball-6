import printGameStartMessage from './startup';
import printGameShutdownMessage from './shutdown';
import Game from './Game';
import { SHUTDOWN_GAME } from './utils';

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
