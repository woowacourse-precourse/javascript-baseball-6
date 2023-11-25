import { Computer, GameProgress, Referee } from '../models/index.js';
import { InputController } from '../controllers/index.js';
import { OutputView } from '../view/index.js';
import { MESSAGE } from '../constants/index.js';

class Game {
  #progress = new GameProgress();
  /**@type {{computer:Computer user:User|undefined}} */
  #participants = {
    computer: new Computer(),
    user: undefined,
  };
  #result = undefined;

  async #setUser() {
    const user = await InputController.getUser();
    this.#participants.user = user;
  }
  start() {
    OutputView.printMessage(`\n${MESSAGE.gameStart}`);
  }
  #restart() {
    this.#progress.setState('playing');
    this.start();
    this.#participants.computer = new Computer();
    this.#result = undefined;
  }
  #getGameResult() {
    const referee = new Referee(this.#participants);
    this.#result = referee.getGameResult();

    OutputView.printMessage(`\n${this.#result}\n`);
  }
  async #updateGameProgress() {
    this.#progress = await InputController.getChangedGameProgress();
  }
  #restartOrEnd() {
    const state = this.#progress.getState();

    switch (state) {
      case 'restart':
        this.#restart();
        break;
      case 'end':
        OutputView.printMessage(`\n${MESSAGE.gameOver}`);
      default:
        break;
    }
  }
  async play() {
    await this.#setUser();
    this.#getGameResult();

    if (this.#result === MESSAGE.threeStrike) {
      OutputView.printMessage(MESSAGE.win);
      await this.#updateGameProgress();
      this.#restartOrEnd();
    }
  }
  getProgress() {
    return this.#progress.getState();
  }
}

export default Game;
