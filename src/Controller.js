import View from './View.js';
import Validate from './Validate.js';
import PickRandomNumbers from './PickRandomNumbers.js';
import Judge from './Judge.js';
import { INFO_MESSAGE } from './constants/Message.js';
import { GAME_SETTING } from './constants/Setting.js';

class Controller {
  ball = 0;
  strike = 0;
  judgeResult = '';

  constructor() {
    this.view = new View();
    this.view.infoPrint(INFO_MESSAGE.GAME_START);
    this.validate = new Validate();
  }

  async game() {
    this.judgeResult = '';
    const computerNumbers = PickRandomNumbers();
    while (this.judgeResult !== GAME_SETTING.THREE_STRIKE) {
      const userPickValue = await this.view.userInput(
        INFO_MESSAGE.INPUT_USER_NUMBER,
      );
      this.validate.userPickNumbers(userPickValue);
      const userNumbers = userPickValue.split('').map((element) => +element);
      [this.ball, this.strike] = new Judge().counter(
        computerNumbers,
        userNumbers,
      );
      this.judgeResult = new Judge().result(this.ball, this.strike);
      this.view.infoPrint(this.judgeResult);
    }
    this.view.infoPrint(INFO_MESSAGE.CORRECT_ANSWER);
    const userRestartValue = await this.view.userInput(
      INFO_MESSAGE.RESTART_OR_EXIT,
    );
    this.validate.restartOrExit(userRestartValue);
    if (userRestartValue === GAME_SETTING.RESTART_NUMBER) this.game();
    if (userRestartValue === GAME_SETTING.EXIT_NUMBER) {
      this.view.infoPrint(INFO_MESSAGE.GAME_OVER);
      return;
    }
  }
}

export default Controller;
