import { MESSAGE } from '../constants/messages.js';

export class BaseballController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  async start() {
    this.view.printMessage(MESSAGE.START);
  }
}
