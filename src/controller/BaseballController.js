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
      const userNumber = await this.view.getInputAsync(MESSAGE.INPUT);
      this.settingUserNumber(userNumber);

      const gameResult = this.model.getGameResult();
      this.view.printGameResult(gameResult);
    } catch (error) {
      this.view.printMessage(error);
    }
  }

  settingUserNumber(userNumber) {
    this.model.setUserNumber(userNumber);
  }
}
