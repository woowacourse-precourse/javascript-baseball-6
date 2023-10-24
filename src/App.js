import { printMessage, readLineAsync, isValidInput } from './utils';
import { MESSAGE, SCORE, SETTING, GAME_STATUS, ERROR_MESSAGE } from './constants';
import { Game } from './Game';

const { START, INPUT_NUMBER, CORRECT, RETRY } = MESSAGE
const { SIZE, RESTART_NUMBER, EXIT_NUMBER } = SETTING;
const { STRIKE } = SCORE;

class App {
  async play() {
    printMessage(START);
    this.start();

    try {
      while (this.game.status === GAME_STATUS.START) {
        const input = await readLineAsync(INPUT_NUMBER);
        isValidInput(input);
        const num = input.split('').map(Number);
        
        const score = this.game.compareScore(num);
        const scoreMessage = this.game.getScoreMessage(score);
        printMessage(scoreMessage);

        if (score.get(STRIKE) === SIZE) {
          printMessage(CORRECT);
          const input = await readLineAsync(RETRY);
          this.retry(input);
        }
      }
    } catch (error) {
      this.end(error);
    }
  }

  start() {
    this.game = new Game();
    this.game.status = GAME_STATUS.START;
  }

  retry(input) {
    input = Number(input);
    if (input === RESTART_NUMBER) {
      this.start();
    } else if (input === EXIT_NUMBER) {
      this.end();
    } else {
      throw new Error(ERROR_MESSAGE.NOT_RETRY_NUMBER);
    }
  }

  end(error) {
    this.game.status = GAME_STATUS.END;
    if (error) {
      throw new Error(error);
    }
  }
}

export default App;
