import { MissionUtils } from '@woowacourse/mission-utils';
import { ErrorMessage, GameCommand, Message } from '../models/const.js';

export default class BaseballGame {
  #gameState;

  constructor(gameState) {
    this.#gameState = gameState;
  }

  async startGame() {
    this.#gameState.generateAnswer();
    this.#printMessage(Message.GameStart);
    return this.#requestNumber();
  }

  async #requestNumber() {
    return MissionUtils.Console.readLineAsync(Message.InputNumber).then(value => {
      const errorMessage = this.#gameState.isInValidNumber(value);
      if (errorMessage) {
        this.#printMessage(errorMessage);
        throw new Error(errorMessage);
      }

      this.#printScore(value);

      if (this.#gameState.isWin(value)) {
        this.#endGame();
        return;
      }

      this.#requestNumber();
    });
  }

  #printMessage(message) {
    MissionUtils.Console.print(message);
  }

  #printScore(value) {
    const score = this.#gameState.checkScore(value);
    this.#printMessage(score);
  }

  async #endGame() {
    try {
      this.#printMessage(Message.GameEnd);
      await this.#requestNewGame();
    } catch (e) {
      this.#printMessage(e.message);
    }
  }

  async #requestNewGame() {
    await MissionUtils.Console.readLineAsync(Message.NewGame).then(async (value) => {
      if (!Object.values(GameCommand).includes(value)) {
        throw new Error(ErrorMessage.Terminate);
      }

      if (GameCommand.EndGame === value) {
        return;
      }

      await this.startGame();
    });
  }
}
