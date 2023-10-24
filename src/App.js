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
    game.initCntStrike();
    game.initCntBall();
  }

  async play() {
    this.init();

    while (this.gameStatus !== EXIT) {
      game.initCntStrike();
      game.initCntBall();
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
        game.initAnswer();
        game.setAnswer();
      }
    }
  }
}

const app = new App();
app.play();

export default App;
