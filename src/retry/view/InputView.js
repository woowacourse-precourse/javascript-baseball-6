
import { Console } from '@woowacourse/mission-utils';
const MESSAGE = require('../constant/message');


/**
 * 사용자에게 게임 진행 중 필요한 값을 입력 받는 역할을 한다.
 */
const InputView = {
  /**
   * 사용자의 숫자를 입력 받는다.
   */
  getNumbers(callback) {
    Console.readLine(MESSAGE.ASK_NUMBERS, callback);
  },
    /**
   * 게임 진행 옵션을 입력 받는다.
   */
    getOptions(callback) {
      Console.readLine(MESSAGE.ASK_OPTION, callback);
    },
};

module.exports = InputView;