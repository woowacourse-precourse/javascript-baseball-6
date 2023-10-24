import { ERROR_MESSAGE } from './constants/error.js';
import { MESSAGE } from './constants/message.js';
import { RESTART_COMMAND } from './constants/system.js';
import CustomError from './exceptions/CustomError.js';
import { BaseballService } from './service/BaseballService.js';
import { inputView, outputView } from './views/index.js';

class App {
  #view = {
    input: inputView,
    output: outputView,
  };

  #service = {
    baseball: BaseballService.of(),
  };

  async play() {
    await this.processTurn();
  }

  async processTurn() {
    const userNumbers = (await this.#view.input.readLine(MESSAGE.enterSubmitBall))
      .split('')
      .map(Number);
    const score = this.#service.baseball.computeScore(userNumbers);
    this.#view.output.print(score);
    await this.checkCompleteGame();
  }

  async checkCompleteGame() {
    if (this.#service.baseball.isEnd()) {
      await this.completeGame();
      return;
    }
    await this.processTurn();
  }

  async completeGame() {
    this.#view.output.print(MESSAGE.completeGame);
    await this.askRestart();
  }

  async askRestart() {
    const restartCommand = (await this.#view.input.readLine(MESSAGE.askRestart)).trim();
    this.#validateRestartCode(restartCommand);
    if (restartCommand === RESTART_COMMAND.CONFIRM) {
      this.#service.baseball.init();
      await this.processTurn();
    }
  }

  #validateRestartCode(code) {
    const validCommandsList = Object.values(RESTART_COMMAND);
    if (!validCommandsList.includes(code)) {
      throw new CustomError(ERROR_MESSAGE.RESTART_COMMAND.INVALID_RESTART_COMMAND);
    }
  }
}

const app = new App();
app.play();

export default App;
