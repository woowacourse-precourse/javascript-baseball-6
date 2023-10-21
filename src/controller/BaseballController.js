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
    } catch (error) {
      this.view.printMessage(error);
    }
  }

  settingUserNumber(userNumber) {
    // TODO 유효성 체크
    this.model.setUserNumber(userNumber);
  }
}
