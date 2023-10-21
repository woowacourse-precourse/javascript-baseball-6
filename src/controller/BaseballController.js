import { RESTART_COMMAND } from '../constants/commands.js';
import { ERROR_MESSAGE, MESSAGE } from '../constants/messages.js';

export class BaseballController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.printMessage(MESSAGE.START);
  }

  async start() {
    try {
      this.model.create();

      while (!this.model.isDone) {
        await this.#playGame();
      }

      const restartCommand = await this.view.getInputAsync(MESSAGE.RESTART);
      this.checkRestartCommand(restartCommand);

      restartCommand === RESTART_COMMAND.NEWGAME ? this.start() : this.quit();
    } catch (error) {
      this.view.printMessage(error);
    }
  }

  async #playGame() {
    const userNumber = await this.view.getInputAsync(MESSAGE.INPUT);
    this.#settingUserNumber(userNumber);

    const gameResult = this.model.getGameResult();
    this.view.printGameResult(gameResult);
  }

  quit() {
    return;
  }

  #settingUserNumber(userNumber) {
    this.model.setUserNumber(userNumber);
  }

  checkRestartCommand(command) {
    const validCommands = [RESTART_COMMAND.NEWGAME, RESTART_COMMAND.QUIT];
    if (!validCommands.includes(command)) {
      throw ERROR_MESSAGE.INVALID_END_COMMAND;
    }
  }
}
