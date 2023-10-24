import BaseballService from './service/BaseballService';

import { inputView, outputView } from './views';

import { splitNumbersToArray } from './utils/splitNumbersToArray';

import { MESSAGE } from './constants/message';
import { RESTART_COMMAND } from './constants/system';
import { ERROR_MESSAGE } from './constants/error';

import CustomError from './exceptions/CustomError';

class App {
  #view = {
    input: inputView,
    output: outputView,
  };

  #service = {
    baseball: BaseballService.of(),
  };

  async play() {
    await this.#processTurn();
  }

  async #processTurn() {
    const userNumbers = splitNumbersToArray(
      await this.#view.input.readLine(MESSAGE.enterSubmitBall),
    );
    const score = this.#service.baseball.computeScore(userNumbers);
    this.#view.output.print(score);
    await this.#checkCompleteGame();
  }

  async #checkCompleteGame() {
    if (this.#service.baseball.isEnd()) {
      await this.#completeGame();
      return;
    }
    await this.#processTurn();
  }

  async #completeGame() {
    this.#view.output.print(MESSAGE.completeGame);
    await this.#askRestart();
  }

  async #askRestart() {
    const restartCommand = (await this.#view.input.readLine(MESSAGE.askRestart)).trim();
    this.#validateRestartCode(restartCommand);
    if (restartCommand === RESTART_COMMAND.confirm) {
      this.#service.baseball.init();
      await this.#processTurn();
    }
  }

  #validateRestartCode(code) {
    const validCommandsList = Object.values(RESTART_COMMAND);
    if (!validCommandsList.includes(code)) {
      throw new CustomError(ERROR_MESSAGE.RESTART_COMMAND.invalidRestartCommand);
    }
  }
}

const app = new App();
app.play();

export default App;
