import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE_METHOD, OUTPUT_MESSAGE_TEXT } from '../constants/message';

const OutputView = {
  /**
   * 주어진 메시지를 출력하기 위한 추상화 된 메서드
   * @param {string} message - 출력할 메시지
   */
  print(message) {
    Console.print(message);
  },

  /**
   * @public
   */
  printStartGame() {
    this.print(OUTPUT_MESSAGE_TEXT.gameStart);
  },

  /**
   * @public
   * @param {import('../utils/jsDoc.js').CompareResult} compareResult - 스트라이크와 볼의 결과를 포함하는 객체
   */
  printCompareResult({ strike, ball }) {
    this.print(OUTPUT_MESSAGE_METHOD.compareResult({ strike, ball }));
  },

  /**
   * @public
   */
  printExitGame() {
    this.print(OUTPUT_MESSAGE_TEXT.exitGame);
  },
};

export default OutputView;
