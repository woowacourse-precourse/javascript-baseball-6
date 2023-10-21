import { Console } from '@woowacourse/mission-utils';

    /**
     * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
     */
    const OutputView = {
    /**
    * 게임 시작 메세지를 출력한다.
     */
    printStart() {
        Console.print('숫자 야구 게임을 시작합니다.');
    },

    /**
   * 숫자 비교 결과를 출력한다.
   */
    printResult(message) {
        Console.print(message.join(' '));
    },
};

module.exports = OutputView;