import { Console } from '@woowacourse/mission-utils';
import { HINT, OUTPUT_MESSAGES } from '../constants/Messages.js';

const OutputView = {
  /**
   * 주어진 문자열을 콘솔에 출력한다.
   * @param {string} message - 출력할 메시지
   */
  print(message) {
    Console.print(message);
  },

  printStart() {
    OutputView.print(OUTPUT_MESSAGES.game_start);
  },

  printSuccess() {
    OutputView.print(OUTPUT_MESSAGES.game_success);
  },

  /**
   * @typedef {object} score
   * @property {number} ball
   * @property {number} strike
   */

  /** @type {score} */
  printHint({ ball, strike }) {
    if (ball === 0 && strike === 0) {
      OutputView.print(HINT.nothing);
    } else {
      const message = HINT.message(ball, strike);
      const hint = message.replace(HINT.clear, '').trim();
      OutputView.print(hint);
    }
  },
};

export default OutputView;
