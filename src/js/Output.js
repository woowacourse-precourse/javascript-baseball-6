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
    this.printMessage(MESSAGE.input);
  }

  printGameStartMessage() {
    this.printMessage(MESSAGE.gameStart);
  }

  printGameOverMessage() {
    this.printMessage(MESSAGE.gameOver);
  }

  printGameRestartMessage() {
    this.printMessage(MESSAGE.gameRestart);
  }

  printTypeErrorMessage() {
    this.printMessage(MESSAGE.typeError);
  }

  printWinMessage() {
    this.printMessage(MESSAGE.win);
  }

  printThreeStrikeMessage() {
    this.printMessage(MESSAGE.threeStrike);
  }

  printNothingMessage() {
    this.printMessage(MESSAGE.nothing);
  }
}

export default Output;
