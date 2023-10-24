import { CONTINUE, LENGTH_OF_ANSWER, EXIT } from './Constants.js';
import Game from './Game.js';
import Message from './Message.js';
import Player from './Player.js';

const game = new Game();
const player = new Player();
class App {
  gameStatus = CONTINUE;

  init() {
    Message.printGameStart();
    game.setAnswer();
  }

  async play() {
    this.init();

    while (this.gameStatus !== EXIT) {
      await player.guessAnswer();
      game.countStrike(player.guessedNumber);
      game.countBall(player.guessedNumber);
      game.printPlayerGuessResult();

      if (game.cntStrike === LENGTH_OF_ANSWER) {
        Message.printGameOver();
        this.gameStatus = await player.choosePlayAgain();
        if (this.gameStatus === EXIT) {
          break;
        }
        game.setAnswer();
      }
    }
  }
}

export default App;
