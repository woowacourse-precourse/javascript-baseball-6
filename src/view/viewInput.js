import { Console } from '@woowacourse/mission-utils';

/**
 * 숫자야구 애플리케이션 Input View를 담당하는 클래스로서,
 * 사용자가 입력한 답변을 Promise를 통해 반환하는 책임을 갖음.
 */

class ViewInput {
  /**
   * @param {string} input
   * @returns
   */
  static getPlayerInput(message) {
    const input = Console.readLineAsync(message);
    return input;
  }
}

export default ViewInput;
