import { GAME_MESSAGES } from './constants/gameMessages.js';
import { print } from './viewControllers/print.js';
import Game from './domains/Game.js';
import { readLine } from './viewControllers/readLine.js';
import Gong from './domains/Gong.js';
import { selectEndOrRestart, SELECTED } from './utils/endOrRestart.js';

class App {
  async play() {
    print(GAME_MESSAGES.START_GAME);
    await this.startGame();
  }

  async startGame() {
    const game = new Game();

    // eslint-disable-next-line no-constant-condition
    while (true) {
      /* eslint-disable no-await-in-loop */
      const userInput = await readLine(GAME_MESSAGES.INPUT_GONGS);
      const gongs = Gong.fromString(userInput);
      const { success, message } = game.compareBalls(gongs);

      print(message);

      if (success) {
        print(GAME_MESSAGES.WINNING_GAME);
        break;
      }
    }

    await this.restartOrEnd();
  }

  async restartOrEnd() {
    const endOrRestartInput = await readLine(GAME_MESSAGES.SELECT_END_OR_RESTART);
    const selectedNum = selectEndOrRestart(endOrRestartInput);

    if (selectedNum === SELECTED.RESTART_GAME) {
      await this.startGame();
    }
  }
}

export default App;
