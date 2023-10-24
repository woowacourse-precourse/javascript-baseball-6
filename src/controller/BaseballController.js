import { RESTART_COMMAND } from '../constants/commands.js';
import { DONE_COUNT, ERROR_MESSAGE, MESSAGE } from '../constants/messages.js';

export class BaseballController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.printMessage(MESSAGE.START);
  }

  async start() {
    this.model.settingComputerNumber();

    while (!this.model.getIsFinished()) {
      const userNumber = await this.view.getInputAsync(MESSAGE.INPUT);
      this.model.setUserNumber(userNumber);

      const gameResult = this.model.getGameResult();
      this.view.printGameResult(gameResult);

      if (gameResult.strike === DONE_COUNT) break;
    }

    const restartCommand = await this.view.getInputAsync(MESSAGE.RESTART);
    this.checkRestartCommand(restartCommand);
    restartCommand === RESTART_COMMAND.NEWGAME ? this.start() : this.quit();
  }

  quit() {
    return;
  }

  checkRestartCommand(command) {
    const validCommands = [RESTART_COMMAND.NEWGAME, RESTART_COMMAND.QUIT];
    if (!validCommands.includes(command)) {
      throw new Error(ERROR_MESSAGE.INVALID_END_COMMAND);
    }
  }
}
