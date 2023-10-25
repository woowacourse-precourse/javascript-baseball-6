import { Console } from '@woowacourse/mission-utils';

class OutputView {
  /**
   * 주어진 문자열 `message`를 콘솔에 출력
   * @param {string} message
   * @returns {string}
   */
  static printMessage(message) {
    Console.print(message);
  }
}

export default OutputView;
