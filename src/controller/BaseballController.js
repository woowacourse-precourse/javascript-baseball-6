import { MESSAGE } from '../constants/messages.js';

export class BaseballController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  async start() {
    this.view.printMessage(MESSAGE.START);
    try {
      this.model.create();

      while (!this.model.isDone) {
        await this.playGame();
      }

      const restartCommand = await this.view.getInputAsync(MESSAGE.RESTART);
    } catch (error) {
      this.view.printMessage(error);
    }
  }

  async playGame() {
    const userNumber = await this.view.getInputAsync(MESSAGE.INPUT);
    this.settingUserNumber(userNumber);

    const gameResult = this.model.getGameResult();
    this.view.printGameResult(gameResult);
  }

  settingUserNumber(userNumber) {
    this.model.setUserNumber(userNumber);
  }
}
