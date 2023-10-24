import { MissionUtils } from '@woowacourse/mission-utils';
import MESSAGE from './Message';

class Output {
  /**
   *
   * @param {string} message
   */
  // eslint-disable-next-line
  printMessage(message) {
    MissionUtils.Console.print(message);
  }

  printInputMessage() {
    this.printMessage(MESSAGE.INPUT);
  }

  printGameStartMessage() {
    this.printMessage(MESSAGE.GAME_START);
  }

  printGameOverMessage() {
    this.printMessage(MESSAGE.GAME_OVER);
  }

  printGameRestartMessage() {
    this.printMessage(MESSAGE.GAME_RESTART);
  }

  printTypeErrorMessage() {
    this.printMessage(MESSAGE.TYPE_ERROR);
  }

  printWinMessage() {
    this.printMessage(MESSAGE.WIN);
  }

  printThreeStrikeMessage() {
    this.printMessage(MESSAGE.THREE_STRIKE);
  }

  printNothingMessage() {
    this.printMessage(MESSAGE.NOTHING);
  }
}

export default Output;
