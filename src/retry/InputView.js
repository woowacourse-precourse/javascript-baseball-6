
import { Console } from '@woowacourse/mission-utils';

/**
 * 사용자에게 게임 진행 중 필요한 값을 입력 받는 역할을 한다.
 */
const InputView = {
  /**
   * 사용자의 숫자를 입력 받는다.
   */
  getNumbers(callback) {
    Console.readLine('숫자를 입력해주세요 : ', callback);
  },
};

module.exports = InputView;