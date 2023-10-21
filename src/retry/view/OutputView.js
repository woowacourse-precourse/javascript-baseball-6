import { Console } from '@woowacourse/mission-utils';
const MESSAGE = require('../constant/message');

    /**
     * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
     */
    const OutputView = {
    /**
    * 게임 시작 메세지를 출력한다.
     */
    printStart() {
        Console.print(MESSAGE.START);
    },

    /**
   * 숫자 비교 결과를 출력한다.
   */
    printResult(message) {
        Console.print(message.join(' '));
    },

    /**
   * 게임 종료 메세지를 출력하고 종료한다.
   */
    finishGame() {
        Console.print(MESSAGE.FINISH);
        Console.close();
    },
};

module.exports = OutputView;