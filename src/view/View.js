import { Console } from '@woowacourse/mission-utils';

export default class View {
  /**
   * @description 사용자에게 메세지를 출력하는 함수
   * @param {string} message
   */
  print(message) {
    Console.print(message);
  }

  /**
   * @description 사용자에게 메세지를 입력받고, 받은 입력을 출력하는 함수
   * @param {string} message
   * @returns {Promise<string>}
   */
  input(message) {
    return Console.readLineAsync(message);
  }
}
